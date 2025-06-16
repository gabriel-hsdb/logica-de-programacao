var sal, horaAula, prof

prof = Number(prompt("Digite e o nível de professor (1,2 e 3)"))
horaAula = Number(prompt("Digite quantas Horas/Aulas você deu"))

if (prof == 1){
    sal = horaAula * 12
}
else if(prof == 2){
    sal = horaAula * 17
}
else if(prof == 3){
    sal = horaAula * 25
}

alert("O seu salario como professor nível " +prof+ " é de " +sal)