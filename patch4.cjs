const fs=require('fs');const path=process.argv[2];let c=fs.readFileSync(path,'utf8');let ok=true;
function rep(n,s,r){if(c.indexOf(s)===-1){console.log("NO: "+n);ok=false;return}c=c.split(s).join(r);console.log("OK: "+n)}
rep("fecha",'color:C.purpleL,fontSize:12,fontFamily:S.fontUI,margin:0}}>{dateDisplay}','color:C.purpleL,fontSize:15,fontWeight:700,fontFamily:S.fontUI,margin:0}}>{dateDisplay}');
rep("tabs-center",'display:"flex",gap:8,flexWrap:"wrap",marginBottom:12}}>','display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center",marginBottom:12}}>');
rep("tab-peso",'fontWeight:activeTab===t.id?700:400,textTransform:"uppercase"','fontWeight:600,textTransform:"uppercase"');
rep("frase-centro",'lineHeight:1.5,margin:"0 0 12px"}}>"{quote}"','lineHeight:1.5,margin:"0 0 12px",textAlign:"center",textWrap:"balance"}}>"{quote}"');
fs.writeFileSync(path,c);console.log(ok?"\nP4 OK":"\nP4 con avisos")
