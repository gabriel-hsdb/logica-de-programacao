        var a = 4.29, g = 5.15, combustivel, litros, desconto

        combustivel = prompt('qual o tipo de combustível? ( g para gasolina e a para alcool')
        console.log ('Tipo de combustivel | ' + combustivel)

        if (combustivel == 'g'){
            litros = Number (prompt ('quantos litros foram vendidos?'))
            console.log('litros | '+litros+'L')
            if (litros < 20){
                desconto = litros * 5.15 * 0.04
                alert ('desconto de R$' + desconto)
                console.log('Resultado | desconto : '+desconto) 
            }
            else{
                desconto = litros + (5.15 * 0.06)
                alert ('desconto de R$' + desconto)
            }
        }

        else if (combustivel == 'a'){
            litros = Number (prompt ('quantos litros foram vendidos?'))
            if (litros < 20){
                desconto = litros * 4.29 * 0.03
                alert ('desconto de R$' + desconto.toFixed(2))
            }
            else{
                desconto = litros * 4.29 * 0.05
                alert ('desconto de R$' + desconto.toFixed(2))
            }
        }

        else{
            alert('erro')
        }
