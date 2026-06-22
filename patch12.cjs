const fs=require('fs');const path=process.argv[2];let c=fs.readFileSync(path,'utf8');let ok=true;
function rep(n,s,r){if(c.indexOf(s)===-1){console.log("NO: "+n);ok=false;return}c=c.split(s).join(r);console.log("OK: "+n)}
// A) Quitar bloque Plus completo de la pantalla de Planes
rep("plans-plus-block",`      <div style={{marginBottom:28}}>
        <h3 style={{color:C.purpleL,fontSize:17,fontWeight:800,fontFamily:S.fontUI,margin:"0 0 16px"}}>
          \u2728 AtrapaSue\u00f1os Plus \u2014 $5.99/Mes \u00b7 $59.99/A\u00f1o
        </h3>
        {[
          {e:"\ud83d\udc96",l:"Reflexiones Premium"},{e:"\ud83d\ude0a",l:"Gu\u00eda Emocional"},
          {e:"\ud83c\udfe5",l:"Salud Personalizada"},{e:"\ud83e\udde0",l:"3 Consultas IA Por D\u00eda"},
          {e:"\ud83c\udfa8",l:"Fondos Premium"},{e:"\ud83d\udcca",l:"Estad\u00edsticas Personales"},
        ].map(({e,l})=>(
          <div key={l} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 0",borderBottom:\`1px solid \${C.border}\`}}>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <span style={{fontSize:22}}>{e}</span>
              <span style={{color:C.text,fontSize:16,fontFamily:S.fontUI}}>{l}</span>
            </div>
            <span style={{background:C.purple,color:"white",borderRadius:20,padding:"6px 16px",fontSize:12,fontWeight:800,fontFamily:S.fontUI}}>PLUS</span>
          </div>
        ))}
        <Btn style={{width:"100%",marginTop:20,padding:"16px",borderRadius:14,background:C.purple,color:"white",fontSize:16,fontWeight:800,fontFamily:S.fontUI}}>\u2728 Probar AtrapaSue\u00f1os Plus</Btn>
      </div>

`,'');
// B) Badge: quitar rama plus
rep("badge-label",'const planLabel = user.plan==="elite"?"Elite":user.plan==="plus"?"Plus":"Gratis";','const planLabel = user.plan==="elite"?"Elite":"Gratis";');
rep("badge-color",'const planColor = user.plan==="elite"?C.gold:user.plan==="plus"?C.purpleL:C.gold;','const planColor = user.plan==="elite"?C.gold:C.gold;');
rep("badge-emoji",'const planEmoji = user.plan==="elite"?"\ud83d\udc51":user.plan==="plus"?"\u2728":"\u2b50";','const planEmoji = user.plan==="elite"?"\ud83d\udc51":"\u2b50";');
// C) Quitar array TABS_PLUS
rep("tabs-plus-array",'  const TABS_PLUS = [...TABS_FREE, {id:"Bienestar",e:"\ud83c\udf3f"}];\n','');
// D) Seleccion de tabs sin plus
rep("tabs-select",'const tabs = user.plan==="elite"?TABS_ELITE:user.plan==="plus"?TABS_PLUS:TABS_FREE;','const tabs = user.plan==="elite"?TABS_ELITE:TABS_FREE;');
// E) Quitar boton "Subir a Elite" (era solo para plus)
rep("plus-upgrade-btn",'        {user.plan==="plus"&&<Btn onClick={onShowPlans} style={{width:"100%",marginTop:16,padding:"18px",borderRadius:14,background:`linear-gradient(135deg,${C.gold},${C.goldL})`,color:"#1a0a00",fontSize:16,fontWeight:900,fontFamily:S.fontUI}}>\ud83d\udc51 Subir A AtrapaSue\u00f1os Elite</Btn>}\n','');
fs.writeFileSync(path,c);console.log(ok?"\nP12 OK":"\nP12 con avisos")