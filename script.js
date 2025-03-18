let participantes = []; // Array para armazenar os participantes

// Função para adicionar um participante à lista
function adicionarNome() {
    const nomeInput = document.getElementById('nome');
    const nome = nomeInput.value.trim(); // Obtemos o valor do input

    if (nome !== "") { // Verificamos se o nome não está vazio
        participantes.push(nome); // Adiciona o nome ao array de participantes

        // Atualiza a lista exibida
        atualizarListaParticipantes();

        // Limpa o campo de input
        nomeInput.value = "";
    } else {
        alert("Por favor, digite um nome válido!");
    }
}

// Função para atualizar a lista de participantes na interface
function atualizarListaParticipantes() {
    const listaParticipantes = document.getElementById('lista-participantes');
    listaParticipantes.innerHTML = ""; // Limpa a lista atual

    // Cria um item de lista para cada participante
    participantes.forEach(function(participante) {
        const li = document.createElement('li');
        li.textContent = participante;
        listaParticipantes.appendChild(li);
    });
}

// Função para sortear os amigos secretos
function sortearAmigos() {
    if (participantes.length < 2) { // Verifica se há pelo menos 2 participantes
        alert("É necessário pelo menos 2 participantes para o sorteio!");
        return;
    }

    // Embaralha a lista de participantes
    const resultados = [...participantes]; // Faz uma cópia do array
    let sorteados = [];

    // Sorteio sem repetição (nenhum participante pode ser seu próprio amigo secreto)
    for (let i = 0; i < participantes.length; i++) {
        let indiceSorteado;

        // Garante que o participante não será sorteado para si mesmo
        do {
            indiceSorteado = Math.floor(Math.random() * participantes.length);
        } while (resultados[indiceSorteado] === participantes[i] || sorteados.includes(resultados[indiceSorteado]));

        sorteados.push(resultados[indiceSorteado]);
    }

    // Exibe os resultados do sorteio
    exibirResultados(sorteados);
}

// Função para exibir os resultados do sorteio
function exibirResultados(sorteados) {
    const resultadosDiv = document.getElementById('resultados');
    const resultadosLista = document.getElementById('resultados-sorteio');

    resultadosLista.innerHTML = ""; // Limpa a lista atual de resultados

    // Exibe os pares sorteados
    participantes.forEach(function(participante, index) {
        const li = document.createElement('li');
        li.textContent = `${participante} -> ${sorteados[index]}`;
        resultadosLista.appendChild(li);
    });

    // Exibe a área com os resultados
    resultadosDiv.style.display = "block";
}
