/*
O que deve ser usado: variáveis, operadores, laços de repetição, estrutura de decisões, funções, classes e objetos.

Objetivo:
Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades: nome, idade, tipo (ex: ninja, mago, monge, guerreiro)
Além disso, deve ter um método chamado "atacar" que deve atender os seguintes requisitos:
- exibir a mensagem: "o (tipo) atacou usando (ataque)"
- aonde o (tipo) deve ser concatenando o tipo que está na propriedade da classe
- e no (ataque) deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo
se mago > (usou magia)
se guerreiro > (usou espada)
se monge > (usou artes marciais)
se ninja > (usou shuriken)

Ao final deve se exibir a mensagem:
"O (tipo) atacou usando (ataque)"
*/

class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar (){
        switch(this.tipo){
            case "mago":
            console.log(`O ${this.tipo} atacou usando magia`)
            break

            case "guerreiro":
            console.log(`O ${this.tipo} atacou usando espada`)
            break

            case "monge":
            console.log(`O ${this.tipo} atacou usando artes marciais`)
            break

            case "ninja":
            console.log(`O ${this.tipo} atacou usando shuriken`)
            break
        }
    }
}

let declararHeroi = new heroi("Gragas", 23, "mago")
declararHeroi.atacar()