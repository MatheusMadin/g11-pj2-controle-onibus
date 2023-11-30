document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        if (form.checkValidity()) {
            try {
                const formData = new FormData(form);

                const response = await axios.post('http://localhost:3000/api/motorista/cadastrar', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                const { motorista } = response.data;

                alert("Motorista cadastrado com sucesso.");

                // window.location.href = `/motoristas/exibir/${motorista.id}`;
            } catch (error) {
                console.error("danger", error.message);
            }
        }

        form.classList.add("was-validated");
    });
});