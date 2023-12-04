document.addEventListener("DOMContentLoaded", async (event) => {

    const url = window.location.href;
    const urlId = url.split("/").pop();

    try {
        const response = await axios.get(`http://localhost:3000/api/linha/buscar/${urlId}`);
        const linha = response.data;

        const inicio = linha.inicio.substring(11, 16);
        const fim = linha.fim.substring(11, 16);

        document.querySelector("#horarioInicio").value = inicio;
        document.querySelector("#horarioFim").value = fim;
        document.querySelector("#localInicio").value = linha.localinicio;
        document.querySelector("#localFim").value = linha.localfim;
    } catch (error) {
        console.error("danger", error.message);
    }

    const form = document.querySelector("#form");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        try {
            const response = await axios.delete(`http://localhost:3000/api/linha/excluir/${urlId}`);

            console.log("success", "Exclusão realizada com sucesso");
            window.location.href = "http://localhost:3001/admin/linha/";
        } catch (error) {
            console.error("danger", error.message);
        }
    });
});