// Data: sample metrics for Dashboard  
const metrics = {  
  labels: ["T0","T+3","T+5","T+7"],  
  gross: [9.5,10.1,11.2,12.3],  
  net:   [7.2,7.9,8.5,9.0]  
};  

// Navigation  
document.querySelectorAll("nav button").forEach(btn=>{  
  btn.onclick = () => {  
    document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));  
    document.getElementById("view-"+btn.dataset.view).classList.add("active");  
  };  
});  

// Dashboard chart  
const ctx = document.getElementById("chartMetrics").getContext("2d");  
new Chart(ctx,{ type:"line", data:{ labels:metrics.labels, datasets:[  
    { label:"Gross IRR %", data:metrics.gross, borderColor:"#0073e6" },  
    { label:"Net IRR %", data:metrics.net,   borderColor:"#00cc66" }  
  ] }, options:{ responsive:true }  
});  

// Carry Simulator  
document.getElementById("btnCalc").onclick = () => {  
  const nav = 566e6, growth=1.20;  
  const roll = +document.getElementById("inpRoll").value/100;  
  const hurdle = +document.getElementById("inpHurdle").value/100;  
  const unreal = nav;  
  const rollAmt = unreal*roll;  
  const future = rollAmt*growth;  
  const gains = future - rollAmt;  
  const carry20 = gains*0.20;  
  const lp = rollAmt + gains*0.80;  
  document.getElementById("outCarry").textContent =  
    `GP Carry: $${(carry20/1e6).toFixed(2)}M\nLP Proceeds: $${(lp/1e6).toFixed(2)}M`;  
};  

// Tokenization Console  
document.getElementById("btnIssue").onclick = () => {  
  const ul = document.getElementById("listTokens");  
  ul.innerHTML = "";  
  for(let i=1;i<=5;i++){  
    const li = document.createElement("li");  
    li.textContent = `Token #${i}: 1,000 units issued`;  
    ul.append(li);  
  }  
};  

// Onboarding calculator  
document.getElementById("btnCalcMin").onclick = () => {  
  const inv = +document.getElementById("inpInvest").value;  
  const min = 25000;  
  const tickets = Math.ceil(inv/min);  
  document.getElementById("outTickets").textContent =  
    `Minimum ${tickets} token tickets (at $25k each).`;  
};  

// AI Insights placeholder  
document.getElementById("btnAsk").onclick = () => {  
  document.getElementById("outAI").textContent =  
    `“Sorry, AI module isn’t live yet.”`;  
};  
