document.addEventListener('DOMContentLoaded', async () => {
    try {
      const id = window.location.pathname.split('/').pop();
      const response = await axios.get(`http://localhost:3000/api/motorista/buscar/${id}`);
      const motorista = response.data;

      const form = document.querySelector('#form');
      const nomeInput = document.querySelector('#nome');
      const cnhInput = document.querySelector('#cnh');
      
      nomeInput.value = motorista.nome;
      cnhInput.value = motorista.cnh;

      form.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (form.checkValidity()) {
          try {
            const formData = new FormData(form);
            await axios.put(`http://localhost:3000/api/motorista/editar/${id}`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });

            window.location.href = `http://localhost:3001/admin/motorista/exibir/${id}`;
          } catch (error) {
            console.log(error);
            alert(error.response.data.mensagem);
          }
        }

        form.classList.add('was-validated');
      }, false);
    } catch (error) {
      console.log(error);

      if (error?.response?.status === 404) {
        alert("Motorista não encontrado.");
        window.location.href = "/motoristas/";
      } else {
        alert(error.response.data.mensagem);
      }
    }
  });