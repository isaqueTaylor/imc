function calcular(){
    var altura = (document.getElementById("altura").value)
    var peso = document.getElementById("peso").value
    
    var imc = (peso / altura**2).toFixed(1)
    var text = "Seu IMC é "
    var result = ""
    if(imc<18.5){
        result=(" e você está abaixo do peso")
    }
    else if(imc<25){
        result=(" e seu peso está normal")
    }
    else if(imc>25.1){
        result=(" e você está acima do Peso")
    }
    document.getElementById("resultado").innerText=text+imc+result
}