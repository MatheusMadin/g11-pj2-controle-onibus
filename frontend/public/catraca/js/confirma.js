async function confirma () {
    const id = window.location.href.split('/').pop()
    try {
        const passageiro = await axios.get(`http://localhost:3000/api/passageiro/buscar/${id}`)
        document.querySelector("#nome").innerHTML = passageiro.data.nome
        document.querySelector("#saldo").innerHTML = `Debito: R$ ${parseFloat(passageiro.data.saldo).toLocaleString("pt-BR", {minimumFractionDigits: 2})}`
        document.querySelector("#tarifa").innerHTML = `Tarifa: R$ ${parseFloat(localStorage.getItem("tarifa")).toLocaleString("pt-BR", {minimumFractionDigits: 2})}`
    } catch (error) {
        console.error("danger", error.message);
    }
}
confirma()

setInterval(function() {
    localStorage.removeItem("tarifa")
    window.location.href = `http://localhost:3001/catraca`
}, 5000); 