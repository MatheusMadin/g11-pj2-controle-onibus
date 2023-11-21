document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("#form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (form.checkValidity()) {
      const inicio = document.querySelector("#horarioInicio").value;
      const fim = document.querySelector("#horarioFim").value;
      const localinicio = document.querySelector("#localInicio").value;
      const localfim = document.querySelector("#localFim").value;

      const data = { inicio, fim, localinicio, localfim };
      try {
        const response = await axios.post("http://localhost:3000/api/linha/cadastrar", data);

        console.log("success", "Cadastro realizado sucesso");

        const id = response.data.id;
        window.location.href = `http://localhost:3001/admin/linha/exibir/${id}`;
      } catch (error) {
        console.error("danger", error.message);
      }
    }

    form.classList.add("was-validated");
  });

});