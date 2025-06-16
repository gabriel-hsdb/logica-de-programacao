var idade, altura, peso
idade = Number(prompt("Informe sua idade"))
altura = Number(prompt("Informe sua altura (em cm)"))
peso = Number(prompt("Informe seu peso (em kg)"))

if(idade >= 12 && altura >= 150 && peso >= 50 && peso <= 120){
    alert("Você está liberado! Divirta-se!")
}
else{
    alert("Você não corresponde aos requisitos minímos para brincar :(")
}