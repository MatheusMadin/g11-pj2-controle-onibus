document.addEventListener("DOMContentLoaded", async (event) => {

  const url = window.location.href;
  const urlId = url.split("/").pop();

  try {
    const response = await axios.get(`http://localhost:3000/api/onibus/buscar/${urlId}`);
    const onibus = response.data;

    document.querySelector("#id").textContent = onibus.id;
    document.querySelector("#placa").textContent = onibus.placa;
  } catch (error) {
    console.error("danger", error.message);
  }
});
