const btnAdd = document.getElementById('btn-add');
const tarefa = document.getElementById('tarefa');
const taskList = document.getElementById('taskList');
const titulo = document.getElementById('titulo');

let nome = prompt('Qual o seu nome?');
if (nome) {
    titulo.innerHTML = `Lista de tarefas de ${nome}`;
}   

btnAdd.addEventListener('click', function() {
    if (tarefa === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }   

    const li = document.createElement('li');
    li.textContent = tarefa.value;
    taskList.appendChild(li);
    tarefa.value = ''; 
})