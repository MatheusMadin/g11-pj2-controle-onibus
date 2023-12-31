document.addEventListener("DOMContentLoaded", async (event) => {

  const url = window.location.href;
  const urlId = url.split("/").pop();

  try {
    const response = await axios.get(`http://localhost:3000/api/motorista/buscar/${urlId}`);
    const motorista = response.data;

    document.querySelector("#nome").value = motorista.nome;
    document.querySelector("#cnh").value = motorista.cnh;
    const foto = document.getElementById("foto");
    foto.src = `http://localhost:3000/${motorista.foto}`
  } catch (error) {
    console.error("danger", error.message);
  }

  const form = document.querySelector("#form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const response = await axios.delete(`http://localhost:3000/api/motorista/excluir/${urlId}`);

      console.log("success", "Exclusão realizada com sucesso");
      window.location.href = "http://localhost:3001/admin/motorista/";
    } catch (error) {
      console.error("danger", error.message);
    }
  });
});