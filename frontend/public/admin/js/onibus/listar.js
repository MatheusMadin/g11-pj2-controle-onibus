document.addEventListener("DOMContentLoaded", async (event) => {

  try {
    const tableBody = document.querySelector("tbody");
    const response = await axios.get("http://localhost:3000/api/onibus/listar");
    response.data.forEach((onibus) => {
      const row = tableBody.insertRow(-1);
      row.insertCell(0).innerHTML = onibus.id;
      row.insertCell(1).innerHTML = onibus.placa;

      // Div para agrupar os links
      const linkContainer = document.createElement("div")
      linkContainer.classList.add("btn-group");
      linkContainer.setAttribute("role", "group");
      // Link para Exibir
      const showLink = document.createElement("a");
      showLink.innerHTML = "Exibir";
      showLink.classList.add("btn", "btn-inverse-info", "btn-sm");
      showLink.href = `http://localhost:3001/admin/onibus/exibir/${onibus.id}`;

      // Link para Editar
      const editLink = document.createElement("a");
      editLink.innerHTML = "Editar";
      editLink.classList.add("btn", "btn-inverse-success", "btn-sm");
      editLink.href = `http://localhost:3001/admin/onibus/editar/${onibus.id}`;
      // Link para Deletar
      const deleteLink = document.createElement("a");
      deleteLink.innerHTML = "Deletar";
      deleteLink.classList.add("btn", "btn-inverse-danger", "btn-sm");
      deleteLink.href = `http://localhost:3001/admin/onibus/excluir/${onibus.id}`;

      linkContainer.appendChild(showLink);
      linkContainer.appendChild(editLink);
      linkContainer.appendChild(deleteLink);
      row.insertCell(2).appendChild(linkContainer);
    });
  } catch (error) {
    console.log("danger", error.message);
  }
});