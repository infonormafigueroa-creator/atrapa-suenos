const fs=require('fs');const path=process.argv[2];let c=fs.readFileSync(path,'utf8');let ok=true;
function rep(n,s,r){if(c.indexOf(s)===-1){console.log("NO: "+n);ok=false;return}c=c.split(s).join(r);console.log("OK: "+n)}
rep("grid-3col",'display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center",marginBottom:12}}>','display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,marginBottom:12}}>');
rep("btn-igual",'padding:"9px 14px",borderRadius:12,fontSize:13,fontFamily:S.fontUI','padding:"10px 6px",borderRadius:12,fontSize:13,fontFamily:S.fontUI,textAlign:"center"');
fs.writeFileSync(path,c);console.log(ok?"\nP7 OK":"\nP7 con avisos")
