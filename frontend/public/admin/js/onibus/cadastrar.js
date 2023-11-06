document.addEventListener("DOMContentLoaded", () => {
  
    const form = document.querySelector("#form");
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      if (form.checkValidity()) {
        const placa = document.querySelector("#placa").value;
  
        const data = { placa };
  
        try {
          const response = await axios.post("http://localhost:3000/api/onibus/cadastrar", data);
        
          console.log("success", "Cadastro realizado sucesso");
  
          const id = response.data.id;
          window.location.href = `http://localhost:3001/admin/onibus/`;
        } catch (error) {
          console.error("danger", error.message);
        }
      }
      
      form.classList.add("was-validated");
    });
  });