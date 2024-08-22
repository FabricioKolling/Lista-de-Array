/*
João está planejando seus exercícios físicos semanais. Crie um array chamado exerciciosSemana com os exercícios
"corrida", "flexões" e "abdominais". Verifique se o último exercício da lista é "alongamento".
Se não for, adicione "alongamento" ao final da lista. Imprima a lista de exercícios atualizada no final.
*/

let exerciciosSemana = ["Corrida", "Flexões", "Abdominais"]

if(exerciciosSemana[2] != "Alongamento"){
    exerciciosSemana.push("Alongamento")
    alert(exerciciosSemana.join(", "))
}
else{
    alert(exerciciosSemana.join(", "))
}