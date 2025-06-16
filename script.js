var h1,h2,m1,m2

        h1 = Number(prompt('Digite a idade do primeiro homem'))
        console.log('homem 1 : '+h1)

        h2 = Number(prompt('Digite a idade do segundo homem'))
        console.log('homem 2 : '+h2)

        m1 = Number(prompt('Digite a idade da primeira mulher'))
        console.log('mulher 1 : '+m1)

        m2 = Number(prompt('Digite a idade da segunda mulher'))
        console.log('mulher 2 : '+m2)

        if(m1 < m2 && h1 < h2){ //homem 1 mais novo //mulher 1 mais nova
            alert('homem mais novo + mulher mais velha = ' + ( h1 + m2 ) + '\nhomem mais velho + mulher mais nova = ' + ( h2 + m1 ))

            console.log('homem novo + mulher velha = ' + ( h1 + m2 ) + '\nhomem velho + mulher nova = ' + ( h2 + m1 ))
        }

        else if(m2 < m1 && h2 < h1){ //mulher 2 mais nova //homem 2 mais novo
            alert('homem mais novo + mulher mais velha = ' + ( h2 + m1 ) + '\nhomem mais velho + mulher mais nova = ' + ( h1 + m2 ))

            console.log('homem novo + mulher velha = ' + ( h2 + m1 ) + '\nhomem velho + mulher nova = ' + ( h1 + m2 ))
        }

        else if(m2 < m1 && h1 < h2){//mulher 2 mais nova //homem 1 mais novo
            alert('homem mais novo + mulher mais velha = ' + ( h1 + m1 ) + '\nhomem mais velho + mulher mais nova = ' + ( h2 + m2 ))

            console.log('homem novo + mulher velha = ' + ( h1 + m1 ) + '\nhomem velho + mulher nova = ' + ( h2 + m2 ))
        }

        else if(m1 < m2 && h2 < h1){//mulher 1 mais nova //homem 2 mais velho
            alert('homem mais novo + mulher mais velha = ' + ( h1 + m2 ) + '\nhomem mais velho + mulher mais nova = ' + ( h2 + m1 ))

            console.log('homem novo + mulher velha = ' + ( h1 + m2 ) + '\nhomem velho + mulher nova = ' + ( h2 + m1 ))
        }