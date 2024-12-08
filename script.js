function adicionarTarefa() {
    // Obtém o valor do input
    let mensagem = "Tarefa adicionada com sucesso";
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim(); // Remove espaços extras
    let nt = document.getElementById("nt");


    if (tarefa === "") {
        document.getElementById("mensagem").textContent = "Por favor, insira uma tarefa.";
        nt = document.getElementById("nt").textContent = ""
        return; // Impede a execução do resto da função
    }

    if (mensagem === "Tarefa adicionada com sucesso") {
        nt = document.getElementById("nt").textContent = tarefa + " foi adicionada a sua lista";
    }

    // Atualiza a mensagem com o texto da tarefa
    document.getElementById("mensagem").textContent = mensagem;

    // Cria um novo elemento <li> com o texto da tarefa
    let listaTarefas = document.getElementById("listTarefas");
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefa;

    // Adiciona o novo <li> à lista de tarefas
    listaTarefas.appendChild(novaTarefa);

    // Limpa o valor do input
    inputTarefa.value = "";
}

