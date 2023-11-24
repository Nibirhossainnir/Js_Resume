const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

var n = navigator.getBattery().then((n)=>{
    
    document.write(`Charging:${n.charging}<br>ChargingTime:${n.chargingTime}<br>DischargingTime:${n.dischargingTime}<br>Level:${n.level*100}%<br>Onchargingchange:${n.onchargingchange}<br>Onchargingtimechange:${n.onchargingtimechange}<br>Ondischargingtimechange:${n.ondischargingtimechange}<br>Onlevelchange:${n.onlevelchange}`);
    console.log(n);
});



