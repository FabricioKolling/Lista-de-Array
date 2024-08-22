/*
Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.
*/

let tarefas = []

resposta1 = prompt("Adicione 1 item na lista:")
tarefas.push (resposta1)

resposta2 = prompt("Adicione 1 item na lista:")
tarefas.push (resposta2)

resposta3 = prompt("Adicione 1 item na lista:")
tarefas.push (resposta3)

tarefas.splice(1, 1, "ligar para o médico")

alert(tarefas.join(", "))