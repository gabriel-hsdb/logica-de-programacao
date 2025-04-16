programa {
 inclua biblioteca Matematica-->mat

  funcao inicio() {

  real pi,altura,volume,raio

  escreva("\nDigite a altura: ")
  leia(altura)

  escreva("\nDigite o raio: ")
    leia(raio)

    pi=(3.14)

  volume=(pi*(mat.potencia(raio,2))*altura)

  escreva("O volume é: "+volume)

  }
}
