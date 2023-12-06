document.addEventListener("DOMContentLoaded", async (event) => {

  const url = window.location.href;
  const urlId = url.split("/").pop();

  try {
    const response = await axios.get(`http://localhost:3000/api/passageiro/buscar/${urlId}`);
    const passageiro = response.data

    document.querySelector("#nome").value = passageiro.nome;
    document.querySelector("#cpf").value = passageiro.cpf;
    document.querySelector("#saldo").value = passageiro.saldo;
    document.querySelector("#codigoCartao").value = passageiro.codigocartao;
  } catch (error) {
    console.error("danger", error.message);
  }

  const form = document.querySelector("#form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (form.checkValidity()) {
      const nome = document.querySelector("#nome").value;
      const cpf = document.querySelector("#cpf").value;
      const saldo = document.querySelector("#saldo").value;
      const codigocartao = document.querySelector("#codigoCartao").value;

      const data = { nome, saldo, cpf, codigocartao };

      try {
        const response = await axios.put(`http://localhost:3000/api/passageiro/editar/${urlId}`, data);

        console.log("success", "Edição realizada com sucesso");

        window.location.href = `http://localhost:3001/admin/passageiro/`;
      } catch (error) {
        console.error("danger", error.message);
      }
    }

    form.classList.add("was-validated");
  });
});
