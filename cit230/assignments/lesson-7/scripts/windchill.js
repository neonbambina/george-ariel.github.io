var t = 18;
var s = 20;
var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);

document.getElementById("wcyo").innerHTML = f.toFixed(2);
document.getElementById("wcyo").innerHTML = t;
document.getElementById("wcyo").innerHTML = s;

    

 

//current conditions
//span for temp, (id = temp)