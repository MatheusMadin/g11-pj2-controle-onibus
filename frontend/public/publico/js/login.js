document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#login");
    console.log(form)

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        if (form.checkValidity()) {
            const cpf = document.querySelector("#cpf").value;
            const senha = document.querySelector("#senha").value;
            console.log(senha)
            const data = { cpf, senha };
            
            try {
                const response = await axios.put("http://localhost:3000/api/passageiro/login", data);
                document.querySelector("#botao").setAttribute("data-bs-toggle", "modal");
                document.querySelector("#botao").setAttribute("data-bs-target", "#modal1");
                const modal = document.querySelector("#modal1")
                const styleModal = window.getComputedStyle(modal)
                if(styleModal.display === "none"){
                    document.querySelector("#botao").click()
                }

                const passageiro = response.data
                const nome = document.querySelector("#nome")
                nome.innerHTML = passageiro.nome
                const saldo = document.querySelector("#saldoAtual")
                saldo.innerHTML = `R$${parseFloat(passageiro.saldo).toLocaleString('pt-BR')}`
            } catch (error) {
                console.error("danger", error.message);
                alert("Credenciais invalida")
            }
        }
    });
})