document.getElementById('placa').addEventListener('input', function (event) {
    let inputValue = event.target.value;
    
    // Remove caracteres não alfanuméricos
    inputValue = inputValue.replace(/[^A-Za-z0-9]/g, '');

    // Aplica o regex para formatar a placa
    inputValue = inputValue.toUpperCase().replace(/^([A-Za-z]{3})([0-9]{4})|([A-Za-z]{3})([0-9])([A-Za-z])([0-9]{2})$/, function(match, p1, p2, p3, p4, p5, p6) {
        if (p1) {
            return p1 + '-' + p2;
        } else {
            return p3 + "-" + p4 + p5 + p6;
        }
    });

    // Atualiza o valor no campo de formulário
    event.target.value = inputValue;
});