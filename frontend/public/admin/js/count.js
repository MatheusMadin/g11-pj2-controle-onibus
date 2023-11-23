setInterval(async () => {
    const motoristaCount = await axios.get('http://localhost:3000/api/motorista/count');
    const passageiroCount = await axios.get('http://localhost:3000/api/passageiro/count');
    const lihaCount = await axios.get('http://localhost:3000/api/linha/count');
    const onibusCount = await axios.get('http://localhost:3000/api/onibus/count');

    document.getElementById('motorista').innerHTML = motoristaCount.data;
    document.getElementById('passageiro').innerHTML = passageiroCount.data;
    document.getElementById('linha').innerHTML = lihaCount.data;
    document.getElementById('onibus').innerHTML = onibusCount.data;
  }, 1000);