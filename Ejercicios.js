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
    if (num1>num2){
        console.log(num1);
    }else if(num2>num1){
        console.log(num2);
    }else{
        console.log("empate");
    }
}

function numero4(){
    
}