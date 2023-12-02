document.addEventListener("DOMContentLoaded", async (event) => {

  const url = window.location.href;
  const urlId = url.split("/").pop();

  try {
    const response = await axios.get(`http://localhost:3000/api/linha/buscar/${urlId}`);
    const linha = response.data;

    const horarioInicio = linha.inicio.substring(11, 16)
    const horarioFim = linha.fim.substring(11, 16)

    document.querySelector("#horarioInicio").value = horarioInicio;
    document.querySelector("#horarioFim").value = horarioFim;
    document.querySelector("#localInicio").value = linha.localinicio;
    document.querySelector("#localFim").value = linha.localfim;

  } catch (error) {
    console.error("danger", error.message);
  }

  const form = document.querySelector("#form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (form.checkValidity()) {
      const inicio = document.querySelector("#horarioInicio").value;
      const fim = document.querySelector("#horarioFim").value;
      const localinicio = document.querySelector("#localInicio").value;
      const localfim = document.querySelector("#localFim").value;

      const data = { urlId, inicio, fim, localinicio, localfim };

      try {
        const response = await axios.put(`http://localhost:3000/api/linha/editar/${urlId}`, data);

        console.log("success", "Edição realizada com sucesso");

        const id = response.data.id;
        window.location.href = `http://localhost:3001/admin/linha/exibir/${urlId}`;
      } catch (error) {
        console.error("danger", error.message);
      }
    }

    form.classList.add("was-validated");
  });
});
