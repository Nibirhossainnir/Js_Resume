var n = navigator.getBattery().then((n)=>{
    
    document.write("Charge "+n.level+"%");
});




