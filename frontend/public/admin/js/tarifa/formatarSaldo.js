document.getElementById('dinheiro').addEventListener('input', function (event) {
    let inputValue = event.target.value;

    // Remove caracteres não numéricos
    inputValue = inputValue.replace(/[^0-9]/g, '');

    // Adiciona vírgula para separar os centavos
    if (inputValue.length > 2) {
        inputValue = inputValue.replace(/^0*(\d+)(\d{2})$/, '$1,$2');
    } else if (inputValue.length === 2) {
        inputValue = `0,${inputValue}`;
    } else {
        inputValue = `0,0${inputValue}`;
    }


    // Adiciona ponto para separar os milhares
    inputValue = inputValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    // Atualiza o valor no campo de formulário
    event.target.value = inputValue;
});
document.getElementById('cartao').addEventListener('input', function (event) {
    let inputValue = event.target.value;

    // Remove caracteres não numéricos
    inputValue = inputValue.replace(/[^0-9]/g, '');

    // Adiciona vírgula para separar os centavos
    if (inputValue.length > 2) {
        inputValue = inputValue.replace(/^0*(\d+)(\d{2})$/, '$1,$2');
    } else if (inputValue.length === 2) {
        inputValue = `0,${inputValue}`;
    } else {
        inputValue = `0,0${inputValue}`;
    }


    // Adiciona ponto para separar os milhares
    inputValue = inputValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    // Atualiza o valor no campo de formulário
    event.target.value = inputValue;
});