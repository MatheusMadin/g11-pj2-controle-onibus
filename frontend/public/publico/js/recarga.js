document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#recarga");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        if (form.checkValidity()) {
            const cpf = document.querySelector("#cpf").value;
            const valor = document.querySelector("#valorRecarga").value;

            const data = { cpf, valor };

            try {
                const response = await axios.put("http://localhost:3000/api/passageiro/recarga", data);
                console.log("success", "Recarga realizada sucesso");
                alert("Recarga realizada sucesso")
                const passageiro = response.data
                const saldo = document.querySelector("#saldoAtual")
                saldo.innerHTML = `R$${parseFloat(passageiro.saldo).toLocaleString('pt-BR')}`
            } catch (error) {
                console.error("danger", error.message);
            }
        }
    });

})