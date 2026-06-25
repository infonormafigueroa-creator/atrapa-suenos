export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const SUPABASE_URL = "https://nrpzgepwppjattfsheus.supabase.co";

  try {
    const event = req.body;

    if (event && event.type === "checkout.session.completed") {
      const sessionId = event.data && event.data.object ? event.data.object.id : null;

      if (sessionId) {
        const sres = await fetch("https://api.stripe.com/v1/checkout/sessions/" + sessionId, {
          headers: { "Authorization": "Bearer " + process.env.STRIPE_SECRET_KEY }
        });
        const session = await sres.json();

        if (session && session.payment_status === "paid") {
          const userId = session.client_reference_id || null;
          const email = (session.customer_details && session.customer_details.email) ? session.customer_details.email : null;

          let filter = null;
          if (userId) filter = "id=eq." + encodeURIComponent(userId);
          else if (email) filter = "email=eq." + encodeURIComponent(email);

          if (filter) {
            await fetch(SUPABASE_URL + "/rest/v1/profiles?" + filter, {
              method: "PATCH",
              headers: {
                "apikey": process.env.SUPABASE_SERVICE_ROLE_KEY,
                "Authorization": "Bearer " + process.env.SUPABASE_SERVICE_ROLE_KEY,
                "Content-Type": "application/json",
                "Prefer": "return=minimal"
              },
              body: JSON.stringify({ plan: "elite" })
            });
          }
        }
      }
    }

    return res.status(200).json({ received: true });
  } catch (e) {
    return res.status(200).json({ received: true });
  }
}
