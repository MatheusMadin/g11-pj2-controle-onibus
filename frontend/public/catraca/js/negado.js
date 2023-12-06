document.querySelector("#erro").innerHTML = localStorage.getItem("erro")

setInterval(function() {
    localStorage.removeItem("erro")
    window.location.href = `http://localhost:3001/catraca`
}, 5000); 