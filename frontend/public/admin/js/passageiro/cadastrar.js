document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("#form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (form.checkValidity()) {
      const nome = document.querySelector("#nome").value;
      const cpf = document.querySelector("#cpf").value;
      const saldo = document.querySelector("#saldo").value;
      const usuarioId = document.querySelector("#usuarioid").value;

      const data = { nome, cpf, saldo, usuarioId };

      try {
        const response = await axios.post("http://localhost:3000/api/passageiro/cadastrar", data);

        console.log("success", "Cadastro realizado sucesso");

        const id = response.data.id;
        window.location.href = `http://localhost:3001/admin/passageiro/exibir/${id}`;
      } catch (error) {
        console.error("danger", error.message);
      }
    }

    form.classList.add("was-validated");
  });
});