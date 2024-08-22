/*
Carlos está definindo suas metas para a semana. Crie um array inicialmente vazio chamado metasSemana.
Adicione três metas à lista. Verifique se a segunda meta é "exercício físico". Se não for, 
modifique-a para "praticar esportes". Imprima a lista de metas semanais no final.

Dicas: Empurrar em inglês - If
*/

let metasSemana = ["Joga Brawl", "Futebas", "Estudar"]

if(metasSemana[1] != "Exercício físico"){
    metasSemana.splice(1,1, "Praticar esportes")
    alert(metasSemana.join(", "))
}
else{
    alert(metasSemana.join(", "))
}