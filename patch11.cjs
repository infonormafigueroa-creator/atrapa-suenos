const fs=require('fs');const path=process.argv[2];let c=fs.readFileSync(path,'utf8');let ok=true;
function rep(n,s,r){if(c.indexOf(s)===-1){console.log("NO: "+n);ok=false;return}c=c.split(s).join(r);console.log("OK: "+n)}
rep("setup-pulse",'      <DreamCatcher size={140}/>\n      <h2 style={{','      <div style={{margin:"20px 0",animation:"pulse 3s ease-in-out infinite"}}>\n        <DreamCatcher size={140}/>\n      </div>\n      <h2 style={{');
rep("tab-autoshow",'onClick={()=>{setActiveTab(t.id);setMsg(null);}}','onClick={()=>{setActiveTab(t.id);generateMsg(t.id);}}');
rep("bg-themes",'var g = x.createLinearGradient(0,0,0,1080); g.addColorStop(0,"#1e0a4e"); g.addColorStop(0.5,"#0d0d2b"); g.addColorStop(1,"#06061a");','var TH=[["#1e0a4e","#0d0d2b","#06061a","#fde68a","#a78bfa"],["#0f2027","#203a43","#2c5364","#e0f7fa","#80deea"],["#42275a","#734b6d","#bc4e9c","#ffe9f5","#ffd6a5"],["#05010f","#0b132b","#1c2541","#ffffff","#9db4ff"],["#3a1c71","#d76d77","#ffaf7b","#fff8f0","#ffe9c7"],["#134e5e","#2c7a6b","#71b280","#eafff5","#cdeede"]]; var th=TH[new Date().getDate()%TH.length]; var g = x.createLinearGradient(0,0,0,1080); g.addColorStop(0,th[0]); g.addColorStop(0.5,th[1]); g.addColorStop(1,th[2]);');
rep("stars-white",'x.fillStyle="#fcd34d"; for(var i=0;i<70;i++){','x.fillStyle="#ffffff"; for(var i=0;i<70;i++){');
rep("quote-color",'x.fillStyle="#fde68a"; x.textAlign="center"; x.textBaseline="middle"; x.font="italic 58px Georgia";','x.fillStyle=th[3]; x.textAlign="center"; x.textBaseline="middle"; x.font="italic 58px Georgia";');
rep("footer-color",'x.fillStyle="#a78bfa"; x.font="600 34px system-ui";','x.fillStyle=th[4]; x.font="600 34px system-ui";');
fs.writeFileSync(path,c);console.log(ok?"\nP11 OK":"\nP11 con avisos")
