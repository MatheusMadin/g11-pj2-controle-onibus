var inputCartao = document.getElementById('cartao');
    
    // Define o foco no elemento de input
    inputCartao.focus();

    // Adiciona um ouvinte de evento para manter o foco
    setInterval(function() {
        if (document.activeElement !== inputCartao) {
            inputCartao.focus();
        }
    }, 100); 