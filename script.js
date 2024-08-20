document.getElementById('button__adicionar').onclick = function() {
    const nome_tarefa = document.getElementById('entrada_dado').value;
    const nova_tarefa = document.createElement('li');
    nova_tarefa.textContent = nome_tarefa;
    const check = document.createElement("input");
    check.type="checkbox";
    check.classList.add("check")
    nova_tarefa.appendChild(check);
    document.getElementById('lista_para-fazer').appendChild(nova_tarefa);


}
 document.getElementById('button__excluir').onclick = function() {
    document.querySelectorAll(".check").forEach(function(check){
        if (check.checked){
            check.parentElement.remove()
        }

    })

d
 }