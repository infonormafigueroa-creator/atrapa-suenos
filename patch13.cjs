const fs=require('fs');const path=process.argv[2];let c=fs.readFileSync(path,'utf8');let ok=true;
function rep(n,s,r){if(c.indexOf(s)===-1){console.log("NO: "+n);ok=false;return}c=c.split(s).join(r);console.log("OK: "+n)}
// Quitar el nombre del prompt "Hoy" (deja solo el genero)
rep("quitar-nombre-hoy",'El usuario es ${user.gender} y se llama ${user.name}.','El usuario es ${user.gender}.');
fs.writeFileSync(path,c);console.log(ok?"\nP13 OK":"\nP13 con avisos")
