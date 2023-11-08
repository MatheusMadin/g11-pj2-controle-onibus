document.addEventListener("DOMContentLoaded", async (event) => {

  const url = window.location.href;
  const urlId = url.split("/").pop();

  try {
    const response = await axios.get(`http://localhost:3000/api/linha/buscar/${urlId}`);
    const linha = response.data;

    const inicio = linha.inicio.substring(11, 16);
    const fim = linha.fim.substring(11, 16);

    document.querySelector("#id").textContent = linha.id;
    document.querySelector("#horarioInicio").textContent = inicio;
    document.querySelector("#horarioFim").textContent = fim;
    document.querySelector("#localInicio").textContent = linha.localinicio;
    document.querySelector("#localFim").textContent = linha.localfim;


    const crudButtons = document.getElementById('crudButtons');
    // Link para Editar
    const editLink = document.createElement("a");
    editLink.innerHTML = "Editar";
    editLink.classList.add("btn", "btn-success", "btn-sm", "mx-1");
    editLink.href = `http://localhost:3001/admin/linha/editar/${linha.id}`;
    crudButtons.appendChild(editLink);

    // Link para Deletar
    const deleteLink = document.createElement("a");
    deleteLink.innerHTML = "Deletar";
    deleteLink.classList.add("btn", "btn-danger", "btn-sm", "mx-1");
    deleteLink.href = `http://localhost:3001/admin/linha/excluir/${linha.id}`;
    crudButtons.appendChild(deleteLink);

    // Link para Exibir
    const showLink = document.createElement("a");
    showLink.innerHTML = "Voltar";
    showLink.classList.add("btn", "btn-info", "btn-sm", "mx-1");
    showLink.href = `http://localhost:3001/admin/linha/`;
    crudButtons.appendChild(showLink);
  } catch (error) {
    console.error("danger", error.message);
  }
});
