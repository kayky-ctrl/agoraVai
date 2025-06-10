const btnAdd = document.getElementById('btn-add');
const tarefa = document.getElementById('tarefa');
const taskList = document.getElementById('taskList');
const titulo = document.getElementById('titulo');

let nome = prompt('Qual o seu nome?');
if (nome == "") {
    titulo.innerHTML = "Lista de tarefas de generica";
}   
else{
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

    const removeButton = document.createElement('button');
    removeButton.id = "remove"
    removeButton.textContent = "x"
    li.appendChild(removeButton);

    const concluirButton = document.createElement('button');
    concluirButton.id = "conclui";
    concluirButton.textContent = "✓"
    li.appendChild(concluirButton);
    
    removeButton.addEventListener('click', function(){
        taskList.removeChild(li);
    })

    concluirButton.addEventListener('click', function(){
        li.classList.toggle('completed');
    })
})


