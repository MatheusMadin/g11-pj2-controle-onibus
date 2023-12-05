const form = document.querySelector('#form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (form.checkValidity()) {
    try {
      const codigocartao = document.querySelector('#cartao').value;
      const viagemId = sessionStorage.getItem("viagem")
      const response = await axios.post(`http://localhost:3000/api/catraca/embarque`, { viagemId, codigocartao });
    } catch (error) {
      console.error("danger", error.message);
    }
  }
});

