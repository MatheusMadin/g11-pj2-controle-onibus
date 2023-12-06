async function start() {
    try {
        const id = await axios.post(`http://localhost:3000/api/usuario/decode`, { "token": localStorage.getItem("token") })
        const response = await axios.get(`http://localhost:3000/api/usuario/buscar/${id.data}`);
        document.querySelector('#nomeUsuario').innerHTML = response.data.nome;
        document.querySelector('#fotoUsuario').src = `http://localhost:3000/${response.data.foto}`
    } catch (error) {
        console.error('Erro ao fazer a chamada à API:', error);
    }
}
start()