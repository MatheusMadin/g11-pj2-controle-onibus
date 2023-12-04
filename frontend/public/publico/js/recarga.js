document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        if (form.checkValidity()) {
            const cpf = document.querySelector("#cpf").value;
            const valor = document.querySelector("#valor").value;

            const data = { cpf, valor };

            try {
                const response = await axios.put("http://localhost:3000/api/passageiro/recarga", data);

                console.log("success", "Recarga realizada sucesso");
                alert("Recarga realizada sucesso")
            } catch (error) {
                console.error("danger", error.message);
            }
        }

        form.classList.add("was-validated");
    });

})