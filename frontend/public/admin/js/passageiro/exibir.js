document.addEventListener("DOMContentLoaded", async (event) => {

  const url = window.location.href;
  const urlId = url.split("/").pop();

  try {
    const response = await axios.get(`http://localhost:3000/api/passageiro/buscar/${urlId}`);
    const passageiro = response.data.passageiro;
    const usuario = response.data.usuario;
    console.log(response.data)
    document.querySelector("#id").textContent = passageiro.id;
    document.querySelector("#nome").textContent = passageiro.nome;
    document.querySelector("#cpf").textContent = passageiro.cpf;
    document.querySelector("#saldo").textContent = passageiro.saldo;
    document.querySelector("#codigoCartao").textContent = passageiro.codigocartao;
    document.querySelector("#usuarioNome").textContent = usuario.nome;


    const crudButtons = document.getElementById('crudButtons');
    // Link para Editar
    const editLink = document.createElement("a");
    editLink.innerHTML = "Editar";
    editLink.classList.add("btn", "btn-success", "btn-sm", "mx-1");
    editLink.href = `http://localhost:3001/admin/passageiro/editar/${passageiro.id}`;
    crudButtons.appendChild(editLink);

    // Link para Deletar
    const deleteLink = document.createElement("a");
    deleteLink.innerHTML = "Deletar";
    deleteLink.classList.add("btn", "btn-danger", "btn-sm", "mx-1");
    deleteLink.href = `http://localhost:3001/admin/passageiro/excluir/${passageiro.id}`;
    crudButtons.appendChild(deleteLink);

    // Link para Exibir
    const showLink = document.createElement("a");
    showLink.innerHTML = "Voltar";
    showLink.classList.add("btn", "btn-info", "btn-sm", "mx-1");
    showLink.href = `http://localhost:3001/admin/passageiro/`;
    crudButtons.appendChild(showLink);
  } catch (error) {
    console.error("danger", error.message);
  }
});
