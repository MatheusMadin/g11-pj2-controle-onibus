async function start () {
    try {
        const response = await axios.get(`http://localhost:3000/api/usuario/buscar/${localStorage.getItem('usuario')}`);
        document.querySelector('#nomeUsuario').innerHTML = response.data.usuario.nome;
        console.log(response.data.usuario.foto);
        document.querySelector('#fotoUsuario').src = `http://localhost:3000/${response.data.usuario.foto}`
    } catch (error) {
        console.error('Erro ao fazer a chamada à API:', error);
    }
}
start()