function atualizarRelogio() {
    const agora = new Date();

    const dia = String(agora.getDate()).padStart(2, '0'); // Dia com dois dígitos
    const mes = String(agora.getMonth() + 1).padStart(2, '0'); // Mês com dois dígitos
    const ano = agora.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;

    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');

    const relogioElement = document.getElementById('relogio');
    relogioElement.innerHTML = `
      ${dataFormatada}
      ${horas}:${minutos}
    `;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000); // Atualiza a cada 1 segundo

const formu = document.querySelector('#cartdgt');

formu.addEventListener('submit', function async (event) {
  const codigocartao = document.querySelector('#campo1').value;
  const data = {codigocartao};
  
  try {
     const response = await axios.post("http://127.0.0.1:3001/catraca");
     response.status(200);
     
  } catch (e) {
    e.message:
  }
});

