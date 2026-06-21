const fs=require('fs');const path=process.argv[2];let c=fs.readFileSync(path,'utf8');let ok=true;
function rep(n,s,r){if(c.indexOf(s)===-1){console.log("NO: "+n);ok=false;return}c=c.split(s).join(r);console.log("OK: "+n)}
rep("firma","function MsgCard({icon, label, quote, intro, more, onClose}) {","function MsgCard({icon, label, quote, cont, onClose}) {");
rep("frase","fontSize:17,fontStyle:\"italic\",","fontSize:20,fontStyle:\"italic\",");
rep("bodyfont","<div style={{color:C.goldL,fontSize:15,fontFamily:S.fontUI,lineHeight:1.9}}>","<div style={{color:C.goldL,fontSize:20,fontFamily:S.fontFamily,lineHeight:1.7}}>");
rep("intro-out","        {renderText(intro)}\n","");
rep("more-cont","{expanded && more && renderText(more)}","{expanded && renderText(cont)}");
rep("btn-cond","{more && !expanded && (","{cont && !expanded && (");
rep("parse","raw.match(/INTRO:\\s*([\\s\\S]+?)(?=MAS:|$)/)","raw.match(/CONT:\\s*([\\s\\S]+)/)");
rep("masline","      const masMatch = raw.match(/MAS:\\s*([\\s\\S]+)/);\n","");
rep("setfield","intro: introMatch?introMatch[1].trim():raw,","cont: introMatch?introMatch[1].trim():raw,");
rep("moreline","        more: masMatch?masMatch[1].trim():\"\",\n","");
rep("catch","quote:null,intro:\"No se pudo generar el mensaje. Intenta de nuevo.\",more:\"\"","quote:\"No se pudo generar el mensaje. Intenta de nuevo.\",cont:\"\"");
{let b=c;c=c.replace(/INTRO:[^\]]*\]\\nMAS:[^\]]*\]/g,"CONT: [3 o 4 oraciones breves que continúan la frase, cálidas y personales, hablando de tú. No menciones el día, la fecha ni el mes. Sin asteriscos.]");console.log(b===c?"NO: prompts":"OK: prompts")}
{let b=c;c=c.split("Hoy es ${todayFull}. ").join("");console.log(b===c?"NO: fecha":"OK: fecha")}
fs.writeFileSync(path,c);console.log(ok?"\nP2 OK":"\nP2 con avisos")
