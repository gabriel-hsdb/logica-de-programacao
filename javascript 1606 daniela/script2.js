var caes
caes = Number(prompt("Informe quantos caes voce atendeu"))
if(caes < 20){
    alert("pet shop ocioso")
}
else if(caes >= 20 && caes <= 30){
    alert("pet shop normal")
}
else {
    alert("pet shop com carga de alta demanda")
}