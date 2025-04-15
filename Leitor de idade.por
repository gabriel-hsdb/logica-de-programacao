programa {
  funcao inicio() {
    real idade
    
    escreva("Qual sua idade?: ")
    leia(idade)
    se (idade>=18){
    escreva("Acesso liberado!")
    }
    senao se (idade<=0){
      escreva("Idade invalida!")
    }
    senao se (idade>=1 ou idade <=17){
    escreva ("Acesso negado!")
    }
  }
}
