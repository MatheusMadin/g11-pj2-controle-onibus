document.addEventListener("DOMContentLoaded", async (event) => {

  const url = window.location.href;
  const urlId = url.split("/").pop();

  try {
    const response = await axios.get(`http://localhost:3000/api/passageiro/buscar/${urlId}`);
    const passageiro = response.data;

    document.querySelector("#nome").value = passageiro.nome;
    document.querySelector("#cpf").value = passageiro.cpf;
    document.querySelector("#saldo").value = passageiro.saldo;
    document.querySelector("#usuarioid").value = passageiro.usuario_id;
  } catch (error) {
    console.error("danger", error.message);
  }

  const form = document.querySelector("#form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (form.checkValidity()) {
      const id = document.querySelector("#id").value;
      const nome = document.querySelector("#nome").value;
      const cpf = document.querySelector("#cpf").value;
      const saldo = document.querySelector("#saldo").value;
      const usuarioId = document.querySelector("#usuarioid").value;

      const data = { id, nome, saldo, cpf, usuarioId };

      try {
        const response = await axios.put(`http://localhost:3000/api/passageiro/editar/${data.id}`, data);

        console.log("success", "Edição realizada com sucesso");

        const id = response.data.id;
        window.location.href = `http://localhost:3001/admin/passageiro/`;
      } catch (error) {
        console.error("danger", error.message);
      }
    }

    form.classList.add("was-validated");
  });
});
