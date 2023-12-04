document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        if (form.checkValidity()) {
            const email = document.querySelector("#email").value;
            const senha = document.querySelector("#senha").value;
            const data = { email, senha };

            try {
                const response = await axios.post('http://localhost:3000/api/usuario/login', data);
                const token = response.data.token;
                localStorage.setItem("token", token)
            } catch (error) {
                console.error("danger", error.message);
            }
        }

        form.classList.add("was-validated");
    });
});