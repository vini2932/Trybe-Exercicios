let a=10;
let b=30;
let c=180;
function MaiorDois(){
    if(a>b){
        console.log("A variavel a é maior que a variavel b")
    }else if(b>a){
        console.log("A variavel b é maior que a variavel a")
    }else{
        console.log("As duas variaveis tem o mesmo valor")
    }
}
 function MaiorTres(){
    if(a>b && a>c){
        console.log("A variavel a tem o maior valore entre as três")
    }else if(b>a && b>c){
        console.log("A variavel b tem o maior valor entre as três")
    }else if(c>a && c>b){
        console.log("A variavel c tem o maior valor entre as três")
    }else{
        console.log("Não existe uma variavel maior entre as três")
    }
 }


 function Positivo(a=0){
    if(a>0){
        console.log("O valor é positivo")
    }else if(a<0){
        console.log("O valor é negativo ")
    }else{
        console.log("O valor é igual a zero")
    }
 }

function Triângulo(a=0,b=0,c=0){
    if(a<0 || b<0 || c<0){
        console.log("Ângulo invalido!")
    }else if(a+b+c===180){
        console.log(true)
        console.log("Sim é um triângulo")
    }else if(a+b+c!=180){
        console.log(false)
        console.log("Não é um triângulo")
    }
}
Triângulo(a,b,c)