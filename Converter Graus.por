programa {
  funcao inicio() {

    real celsius,fahrenheit,kelvin

    escreva("Digite a temperatura em Graus celsius que você dejesa converter para  Fahrenheit e Escala Kelvin: ")
    leia(celsius)

    fahrenheit = (celsius*1.8+32)
    escreva("Fahrenheit: "+fahrenheit)

    kelvin = (celsius+273)
    escreva("\nEscala Kelvin:"+kelvin)
  }
}
