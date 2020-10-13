

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar!")
}

function redirecionar(){
    window.open("https://globallab.org/en/#.X4Tm69BKgdU");
    //window.location.href="https://globallab.org/en/#.X4Tm69BKgdU";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto")
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("Pagina carregada!")

}
function funcaoChange(elemento){
    console.log(elemento.value)

}



/*
var validar = 0;
function validaIdade(idade){
    
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual e a sua idade ? ");
console.log(validaIdade(idade));

function soma(n1, n2){
    return n1 + n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome,novo_nome)
}
alert(soma(5, 10));
alert(setReplace(" Vai Japao", "Japao", "Brasil"))

var d = new Date();
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours())

var count ;
for( count=1; count <=5; count++){
    alert(count);
};


for( count=0; count <=5; count++){
    alert(count);
};


var count = 0;
while( count <= 5){
    console.log(count);
    //count = count + 1;
    alert(count);
    count++;
}

var idade = prompt("Qual eh a sua idade ? ");
//var idade = 18;
if( idade >= 18 ){
    alert("maior de idade");
}else{
    alert("menor de idade");
}

var frutas = [{nome: "maca" , cor: "vermelha"},{nome: "uva" , cor: "roxa"}];
console.log(frutas)
console.log(frutas[1].nome)
console.log(frutas[1].cor)

var fruta = {nome: "maca" , cor: "vermelha"};
console.log(fruta)
console.log(fruta.nome)
console.log(fruta.cor)



var lista = ["maca", "pera","laranja"];

console.log(lista[1])
lista.push("uva")
lista.pop()
console.log(lista.reverse())
console.log(lista.length)
console.log(lista)
console.log(lista.toString())
console.log(lista[0]);
console.log(lista.toString()[0])
console.log(lista.join(" - "))



var nome = "Pablo Mattos";
var idade = 39;
var idade2 = 10;
var frase = " Japão é o melhor time do Mundo";
alert(nome + " tem " + idade + " anos.");
alert( idade + idade2)
console.log(nome)
console.log(idade+idade2)
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

alert(frase.replace("Japão", "Brasil"));*/