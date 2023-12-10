document.addEventListener("DOMContentLoaded", async (event) => {

  const url = window.location.href;
  const urlId = url.split("/").pop();

  try {
    const response = await axios.get(`http://localhost:3000/api/passageiro/buscar/${urlId}`);
    const passageiro = response.data;

    document.querySelector("#nome").value = passageiro.nome;
    document.querySelector("#cpf").value = passageiro.cpf;
    document.querySelector("#saldo").value = passageiro.saldo;
    document.querySelector("#tipo").value = passageiro.tipo;
    document.querySelector("#codigoCartao").value = passageiro.codigocartao;
  } catch (error) {
    console.error("danger", error.message);
  }

  const form = document.querySelector("#form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const response = await axios.delete(`http://localhost:3000/api/passageiro/excluir/${urlId}`);

      console.log("success", "Exclusão realizada com sucesso");
      window.location.href = "http://localhost:3001/admin/passageiro/";
    } catch (error) {
      console.error("danger", error.message);
    }
  });
});