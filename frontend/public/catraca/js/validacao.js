const form = document.querySelector('#form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (form.checkValidity()) {
    try {
      const codigocartao = document.querySelector('#cartao').value;
      const viagemId = sessionStorage.getItem("viagem")
      const response = await axios.post(`http://localhost:3000/api/catraca/embarque`, { viagemId, codigocartao });
      localStorage.setItem("tarifa", response.data.tarifa)
      const id = response.data.cliente_id
      window.location.href = `http://localhost:3001/catraca/confirma/${id}`
    } catch (error) {
      localStorage.setItem("erro", error.response.data.msg)
      window.location.href = `http://localhost:3001/catraca/negado`
    }
  }
});

