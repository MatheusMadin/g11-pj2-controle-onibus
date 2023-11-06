document.addEventListener("DOMContentLoaded", async (event) => {
  
    try {
      const tableBody = document.querySelector("tbody");
      const response = await axios.get("http://localhost:3000/api/onibus/listar");
      response.data.forEach((onibus) => {
        const row = tableBody.insertRow(-1);
        row.insertCell(0).innerHTML = onibus.id;
        row.insertCell(1).innerHTML = onibus.placa;
  
        // Link para Exibir
        const showLink = document.createElement("a");
        showLink.innerHTML = "Exibir";
        showLink.classList.add("btn", "btn-info", "btn-sm", "mx-1");
        showLink.href = `http://localhost:3001/onibus/exibir/${onibus.id}`;
        row.insertCell(2).appendChild(showLink);
  
        // Link para Editar
        const editLink = document.createElement("a");
        editLink.innerHTML = "Editar";
        editLink.classList.add("btn", "btn-success", "btn-sm", "mx-1");
        editLink.href = `http://localhost:3001/onibus/editar/${onibus.id}`;
        row.insertCell(3).appendChild(editLink);
  
        // Link para Deletar
        const deleteLink = document.createElement("a");
        deleteLink.innerHTML = "Deletar";
        deleteLink.classList.add("btn", "btn-danger", "btn-sm", "mx-1");
        deleteLink.href = `http://localhost:3001/onibus/excluir/${onibus.id}`;
        row.insertCell(4).appendChild(deleteLink);
      });
    } catch (error) {
      console.log("danger", error.message);
    }
  });