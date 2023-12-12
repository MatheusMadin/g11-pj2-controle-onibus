document.addEventListener("DOMContentLoaded", async (event) => {

  const form = document.querySelector("#form");

  try {
    const response = await axios.get(`http://localhost:3000/api/tarifa/exibir`);
    document.querySelector("#lidinheiro").innerHTML = `Dinheiro: R$${parseFloat(response.data.dinheiro).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
    document.querySelector("#licartao").innerHTML = `Cartão: R$${parseFloat(response.data.cartao).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
  } catch (error) {
    console.error("danger", error.message);
  }
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (form.checkValidity()) {
      const dinheiro = document.querySelector("#dinheiro").value;
      const cartao = document.querySelector("#cartao").value;

      const data = { dinheiro, cartao };

      try {
        const response = await axios.post("http://localhost:3000/api/tarifa/cadastrar", data);
        console.log("success", "Cadastro realizado sucesso");
        alert("Tarifa Alterada")
        document.querySelector("#lidinheiro").innerHTML = `Dinheiro: R$${parseFloat(response.data.dinheiro).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
        document.querySelector("#licartao").innerHTML = `Cartão: R$${parseFloat(response.data.cartao).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
      } catch (error) {
        console.error("danger", error.message);
      }
    }

    form.classList.add("was-validated");
  });
});