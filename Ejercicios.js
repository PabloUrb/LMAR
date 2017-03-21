function numero2() {
    var number = document.getElementById("numero2").value;
    number = parseInt(number);
    var div = document.getElementById("resultado");
    var HTML = "<ul>";
    for (var i = 0; i <= number; i++) {
        HTML += "<li>" + i + "</li>";
    }
    div.innerHTML = HTML + "</ul>";
}

function numero3() {
    var num1 = document.getElementById("numero3").value;
    var num2 = document.getElementById("numero4").value;
    if (num1 > num2) {
        console.log(num1);
    } else if (num2 > num1) {
        console.log(num2);
    } else {
        console.log("empate");
    }
}

function numero4() {
    var dia = document.getElementById("dia").value;
    switch (dia) {
        case "lunes":
            day = "0";
            break;
        case "martes":
            day = "1";
            break;
        case "miercoles":
            day = "2";
            break;
        case "jueves":
            day = "3";
            break;
        case "viernes":
            day = "4";
            break;
        case "sabado":
            day = "5";
            break;
        case "domingo":
            day = "6";
    }
    console.log(day);
}
 var rand = Math.floor((Math.random() * 10) + 1);
function numero5(){
   var num= document.getElementById("numero5").value;
   if(num == rand){
       console.log("ese era!!!");
   }else if( num != rand){
       console.log("NO era ese, lo siento");
       if(rand>num){
           console.log("el random es mayor que el que has puesto");
       }else{
           console.log("el random es menor que el que has puesto");
       }
   }
}
function sumar(){
    var num1 = document.getElementById("numero6").value;
    var num2 = document.getElementById("numero7").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    var num3 = num1 + num2;
    console.log("el resultado de sumar "+num1+" més "+num2+" es "+num3+"");
} 

function restar(){
    var num1 = document.getElementById("numero8").value;
    var num2 = document.getElementById("numero9").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    var num3 = num1 - num2;
    console.log("el resultado de restar "+num1+" més "+num2+" es "+num3+"");
} 

function multiplicar(){
    var number = document.getElementById("numero10").value;
    var number2 = document.getElementById("numero11").value;
    number = parseInt(number);
    number2 = parseInt(number);
    var div = document.getElementById("resultado");
    var a = 1;
    var HTML = "<ul>";
    for (var i = 0; i <= number2; i++) {
        a=a*number;
        HTML += "<li>" + a + "</li>";
        
    }
    div.innerHTML = HTML + "</ul>";
}