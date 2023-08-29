function atualizarRelogio() {
    const agora = new Date();

    const dia = String(agora.getDate()).padStart(2, '0'); // Dia com dois dígitos
    const mes = String(agora.getMonth() + 1).padStart(2, '0'); // Mês com dois dígitos
    const ano = agora.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;

    const horas = agora.getHours();
    const minutos = agora.getMinutes();

    const relogioElement = document.getElementById('relogio');
    relogioElement.innerHTML = `
      ${dataFormatada}
      ${horas}:${minutos}
    `;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000); // Atualiza a cada 1 segundo