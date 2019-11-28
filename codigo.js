function cambiarcolor(){
    var simbolo, color;

    simbolo = "0123456789ABCDEF";
    color = "#";
    
    for (let i = 0; i < 6; i++) {
        color = color + simbolo[Math.floor(Math.random() * 16)];
    }

    document.body.style.background = color;
    document.getElementById("hex").innerHTML = color;
}