document.addEventListener("DOMContentLoaded", async (event) => {

  const url = window.location.href;
  const urlId = url.split("/").pop();

  try {
    const response = await axios.get(`http://localhost:3000/api/onibus/buscar/${urlId}`);
    const onibus = response.data;

    document.querySelector("#placa").value = onibus.placa;
  } catch (error) {
    console.error("danger", error.message);
  }

  const form = document.querySelector("#form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (form.checkValidity()) {
      const placa = document.querySelector("#placa").value;

      const data = { urlId, placa };

      try {
        const response = await axios.put(`http://localhost:3000/api/onibus/editar/${urlId}`, data);

        console.log("success", "Edição realizada com sucesso");

        window.location.href = `http://localhost:3001/admin/onibus/exibir/${urlId}`;
      } catch (error) {
        console.error("danger", error.message);
      }
    }

    form.classList.add("was-validated");
  });
});
