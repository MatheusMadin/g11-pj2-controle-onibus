document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        // Valida se é imagem
        const formData = new FormData(form);
        const arquivoInput = document.getElementById('foto');
        const arquivo = arquivoInput.files[0];

        if (arquivo) {
            var tipoPermitido = /^image\//; // Verifica se o tipo MIME começa com "image/"

            if (!tipoPermitido.test(arquivo.type)) {
                alert("Por favor, selecione um arquivo de imagem válido.");
                arquivoInput.value = ''; // Limpa o campo de arquivo
            }
        }

        if (form.checkValidity()) {
            try {

                const response = await axios.post('http://localhost:3000/api/usuario/cadastrar', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                alert("Usuario criado com sucesso.")
                window.location.href = `http://localhost:3001/admin/login`;
            } catch (error) {
                console.error("danger", error.message);
            }
        }

        form.classList.add("was-validated");
    });
});