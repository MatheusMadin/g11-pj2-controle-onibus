document.querySelector("#erro").innerHTML = localStorage.getItem("erro")
async function negado () {
    const id = localStorage.getItem("id")
    try {
        const passageiro = await axios.get(`http://localhost:3000/api/passageiro/buscar/${id}`)
        document.querySelector("#saldo").innerHTML = `SALDO: R$ ${parseFloat(passageiro.data.saldo).toLocaleString("pt-BR", {minimumFractionDigits: 2})}`
        document.querySelector("#tarifa").innerHTML = `TARIFA: R$ ${parseFloat(localStorage.getItem("tarifa")).toLocaleString("pt-BR", {minimumFractionDigits: 2})}`
    } catch (error) {
        console.error("danger", error.message);
    }
}
negado()
setInterval(function() {
    localStorage.removeItem("erro")
    localStorage.removeItem("tarifa")
    localStorage.removeItem("id")
    window.location.href = `http://localhost:3001/catraca`
}, 5000); 