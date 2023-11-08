document.addEventListener("DOMContentLoaded", async (event) => {

  try {
    const tableBody = document.querySelector("tbody");
    const response = await axios.get("http://localhost:3000/api/linha/listar");
    response.data.forEach((linha) => {
      const row = tableBody.insertRow(-1);
      row.insertCell(0).innerHTML = linha.id;
      row.insertCell(1).innerHTML = formatarHorario(linha.inicio);
      row.insertCell(2).innerHTML = formatarHorario(linha.fim);
      row.insertCell(3).innerHTML = linha.localinicio;
      row.insertCell(4).innerHTML = linha.localfim;

      // Div para agrupar os links
      const linkContainer = document.createElement("div")
      linkContainer.classList.add("btn-group");
      linkContainer.setAttribute("role", "group");
      // Link para Exibir
      const showLink = document.createElement("a");
      showLink.innerHTML = "Exibir";
      showLink.classList.add("btn", "btn-inverse-info", "btn-sm");
      showLink.href = `http://localhost:3001/admin/linha/exibir/${linha.id}`;

      // Link para Editar
      const editLink = document.createElement("a");
      editLink.innerHTML = "Editar";
      editLink.classList.add("btn", "btn-inverse-success", "btn-sm");
      editLink.href = `http://localhost:3001/admin/linha/editar/${linha.id}`;
      // Link para Deletar
      const deleteLink = document.createElement("a");
      deleteLink.innerHTML = "Deletar";
      deleteLink.classList.add("btn", "btn-inverse-danger", "btn-sm");
      deleteLink.href = `http://localhost:3001/admin/linha/excluir/${linha.id}`;

      linkContainer.appendChild(showLink);
      linkContainer.appendChild(editLink);
      linkContainer.appendChild(deleteLink);
      row.insertCell(5).appendChild(linkContainer);
    });
  } catch (error) {
    console.log("danger", error.message);
  }
});

function formatarHorario(data) {
  const date = new Date(data);
  const horaLocal = date.getHours() + date.getTimezoneOffset() / 60;
  const minutos = date.getMinutes();
  return `${horaLocal < 10 ? "0" + horaLocal : horaLocal}:${minutos < 10 ? "0" + minutos : minutos
    }`;
}
