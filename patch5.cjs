const fs=require('fs');const path=process.argv[2];let c=fs.readFileSync(path,'utf8');let ok=true;
function rep(n,s,r){if(c.indexOf(s)===-1){console.log("NO: "+n);ok=false;return}c=c.split(s).join(r);console.log("OK: "+n)}
rep("frase-centro",'lineHeight:1.5,margin:"0 0 12px"\n          }}>"{quote}"','lineHeight:1.5,margin:"0 0 12px",textAlign:"center",textWrap:"balance"\n          }}>"{quote}"');
fs.writeFileSync(path,c);console.log(ok?"\nP5 OK":"\nP5 con avisos")
