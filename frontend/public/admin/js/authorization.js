async function auth () {
    try {
        await verifyToken();
    } catch (error) {
        console.error("Erro ao verificar o token:", error);
        window.location.replace("/admin/login");
    }
}
auth()
async function verifyToken() {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Token não encontrado");
    }

    const response = await axios.get("http://localhost:3000/api/usuario/token", {
        headers: {
            Authorization: token,
        },
    })
    if (response.status === 401) {
        throw new Error(response.data.msg);
    }
    return response.data
}

// SingOut
document.getElementById('singout').addEventListener('click', function(event) {
    // Prevenir o comportamento padrão do link (não navegar para outra página)
    event.preventDefault();

    // Apagar o localStorage
    localStorage.clear();

    // Mensagem para indicar que o localStorage foi apagado (opcional)
    window.location.href = `http://localhost:3001/admin/login`
});