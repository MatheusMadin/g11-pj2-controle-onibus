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

                window.location.href = `http://localhost:3001/admin/motorista/exibir/${response.data.id}`;
            } catch (error) {
                console.error("danger", error.message);
            }
        }

        form.classList.add("was-validated");
    });
});