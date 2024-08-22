/*
Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final.
*/

let tarefasLimpeza = []

tarefa1 = prompt("Adicione uma tarefa na lista:")
tarefasLimpeza.push (tarefa1)

tarefa2 = prompt("Adicione outra tarefa na lista:")
tarefasLimpeza.push (tarefa2)

tarefa3 = prompt("Adicione mais uma tarefa na lista:")
tarefasLimpeza.push (tarefa3)

tarefa4 = prompt("Adicione mais outra tarefa na lista:")
tarefasLimpeza.push (tarefa4)

tarefasLimpeza.splice(2,1)
tarefasLimpeza.splice(1,1, "Limpar banheiro")
alert(tarefasLimpeza)