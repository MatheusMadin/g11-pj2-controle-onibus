document.addEventListener("DOMContentLoaded", async (event) => {

    const url = window.location.href;
    const urlId = url.split("/").pop();
  
    try {
      const response = await axios.get(`http://localhost:3000/api/motorista/buscar/${urlId}`);
      const motorista = response.data;
  
      document.querySelector("#id").textContent = motorista.id;
      document.querySelector("#nome").textContent = motorista.nome;
      document.querySelector("#cnh").textContent = motorista.cnh;
      const foto = document.getElementById("foto");
      foto.src = `http://localhost:3000/${motorista.foto}`  
      const crudButtons = document.getElementById('crudButtons');
      // Link para Editar
      const editLink = document.createElement("a");
      editLink.innerHTML = "Editar";
      editLink.classList.add("btn", "btn-success", "btn-sm", "mx-1");
      editLink.href = `http://localhost:3001/admin/motorista/editar/${motorista.id}`;
      crudButtons.appendChild(editLink);
  
      // Link para Deletar
      const deleteLink = document.createElement("a");
      deleteLink.innerHTML = "Deletar";
      deleteLink.classList.add("btn", "btn-danger", "btn-sm", "mx-1");
      deleteLink.href = `http://localhost:3001/admin/motorista/excluir/${motorista.id}`;
      crudButtons.appendChild(deleteLink);
  
      // Link para Voltar
      const showLink = document.createElement("a");
      showLink.innerHTML = "Voltar";
      showLink.classList.add("btn", "btn-info", "btn-sm", "mx-1");
      showLink.href = `http://localhost:3001/admin/motorista/`;
      crudButtons.appendChild(showLink);
    } catch (error) {
      console.error("danger", error.message);
    }
  });
  