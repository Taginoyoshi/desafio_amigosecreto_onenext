let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('nome-amigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    input.value = "";
}

function atualizarListaAmigos() {
    const lista = document.getElementById('lista-amigos');
    lista.innerHTML = ""; // Limpa a lista

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo disponível para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado-sorteio');
    resultado.innerHTML = `Amigo sorteado: <strong>${nomeSorteado}</strong>`;
}
