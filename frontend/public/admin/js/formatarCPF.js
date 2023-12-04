document.getElementById('cpf').addEventListener('input', function (event) {
    let inputValue = event.target.value;
    
    // Remove caracteres não numéricos
    inputValue = inputValue.replace(/\D/g, '');
    
    // Adiciona pontos e traço conforme o formato do CPF
    if (inputValue.length > 3) {
        inputValue = inputValue.substring(0, 3) + '.' + inputValue.substring(3);
    }
    if (inputValue.length > 7) {
        inputValue = inputValue.substring(0, 7) + '.' + inputValue.substring(7);
    }
    if (inputValue.length > 11) {
        inputValue = inputValue.substring(0, 11) + '-' + inputValue.substring(11);
    }
    
    // Atualiza o valor no campo de formulário
    event.target.value = inputValue;
});