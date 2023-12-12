document.addEventListener("DOMContentLoaded", async (event) => {
    try {
        const tableBody = document.querySelector("#dados");
        const response = await axios.get("http://localhost:3000/api/tarifa/listar")
        response.data.forEach((tarifa) => {
            const novaLinha = document.createElement('tr');
            const datasplit = tarifa.data.split("-")
            const data = datasplit[2] + "/" + datasplit[1] + "/" + datasplit[0]
            novaLinha.innerHTML = `
                <td>${data}</td>
                <td>Cartão - R$${parseFloat(tarifa.cartao).toLocaleString("pt-BR", { minimumFractionDigits: 2 })} / Dinheiro - R$${parseFloat(tarifa.dinheiro).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
            `;
            tableBody.appendChild(novaLinha);
        });
    } catch (error) {
        console.log("danger", error.message);
    }
})