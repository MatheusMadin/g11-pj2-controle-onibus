document.addEventListener("DOMContentLoaded", async (event) => {

  const url = window.location.href;
  const urlId = url.split("/").pop();

  try {
    const response = await axios.get(`http://localhost:3000/api/onibus/buscar/${urlId}`);
    const onibus = response.data;

    document.querySelector("#placa").value = onibus.placa;
  } catch (error) {
    console.error("danger", error.message);
  }

  const form = document.querySelector("#form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const response = await axios.delete(`http://localhost:3000/api/onibus/excluir/${urlId}`);

      console.log("success", "Exclusão realizada com sucesso");
      window.location.href = "http://localhost:3001/admin/onibus/";
    } catch (error) {
      console.error("danger", error.message);
    }
  });
});