function calcular(){
    var altura= (document.getElementById("altura").value)/100
    var peso= document.getElementById("peso").value

    var imc= (peso / altura ** 2).toFixed(2);
    var clas=""
    if(imc<18.5){
        clas= "Abaixo do peso"
    } else if(imc<24.9){
        clas= "Peso normal"
    } else if(imc<29.9){
        clas= "Acima do peso"
    } else if(imc<39.9){
        clas= "Obesidade II"
    } else if(imc>39.9){
        clas= "Obesidade III"
    }  
    document.getElementById("valor_imc").innerText=imc
    document.getElementById("categoria").innerText=clas
}