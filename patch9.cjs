const fs=require('fs');const path=process.argv[2];let c=fs.readFileSync(path,'utf8');let ok=true;
function rep(n,s,r){if(c.indexOf(s)===-1){console.log("NO: "+n);ok=false;return}c=c.split(s).join(r);console.log("OK: "+n)}
rep("layout-vertical",',fontWeight:600,textTransform:"uppercase"}}>{t.e} {(TAB_CONFIG[t.id]||{}).label||t.id}</Btn>',',fontWeight:600,textTransform:"uppercase",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,minHeight:70}}><span style={{fontSize:20}}>{t.e}</span><span style={{lineHeight:1.15}}>{(TAB_CONFIG[t.id]||{}).tab||(TAB_CONFIG[t.id]||{}).label||t.id}</span></Btn>');
rep("hoy-corto",'"Hoy":{icon:"🌅",label:"MENSAJE DEL DÍA",color:C.purpleL}','"Hoy":{icon:"🌅",label:"MENSAJE DEL DÍA",tab:"HOY",color:C.purpleL}');
rep("noche-corto",'"Noche":{icon:"🌙",label:"CIERRE DEL DÍA",color:C.blue}','"Noche":{icon:"🌙",label:"CIERRE DEL DÍA",tab:"NOCHE",color:C.blue}');
fs.writeFileSync(path,c);console.log(ok?"\nP9 OK":"\nP9 con avisos")
