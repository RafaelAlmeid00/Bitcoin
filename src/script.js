//Declaração das Constantes

const Moeda = document.getElementById("Moeda");
const MaxValor = document.getElementById("Max");
const MinValor = document.getElementById("Min");
const VolumeVendido = document.getElementById("Volume");
const MaxUltima = document.getElementById("Maxultima");
const MinUltima = document.getElementById("Minultima");
const Ultima = document.getElementById("Ultima");
const day = document.getElementById("data");


//Lógica de Programação

const API = axios.create ( { //Define a URL base utilizada
    baseURL: "https://www.mercadobitcoin.net/api/"
})

// Cria uma função para a pesquisa da API
async function Pesquisar(complementoMoeda, complementoMetodo, consulta) { 
    //Define parametros dentro da própria função
    complementoMoeda = (Moeda.value)
    console.log(complementoMoeda) 
    complementoMetodo = (Tipo.value)
    console.log(complementoMetodo)

    //Faz o pedido por método GET usando os valores definidos pelo "Select" no HTML
    consulta = await API.get(complementoMoeda + "/" + complementoMetodo + "/")
    console.log(consulta);

    //Método "Ticker" (Queria usar os outros métodos, mas fiquei com preguiça)
    //Tranforma em número as strings recebidas da API e coloca os valores no HTML
    MaxValor.innerText = Number(consulta.data.ticker['high']).toFixed(2)
    console.log(MaxValor.innerText);
    MinValor.innerText = Number(consulta.data.ticker['low']).toFixed(2)
    console.log(MinValor.innerText);
    VolumeVendido.innerText = Number(consulta.data.ticker['vol']).toFixed(8)
    console.log(VolumeVendido.innerText);
    MaxUltima.innerText = Number(consulta.data.ticker['buy']).toFixed(2)
    console.log(MaxUltima.innerText);
    MinUltima.innerText = Number(consulta.data.ticker['sell']).toFixed(2)
    console.log(MinUltima.innerText);
    Ultima.innerText = Number(consulta.data.ticker['last']).toFixed(2)
    console.log(Ultima.innerText);

    //Declara a data no HTML
    let now = new Date();
    day.innerText = dateBuilder(now);


}

    //Diz o dia a qual o usuário está utlizando a API
function dateBuilder(d) {
    let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julio", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`; 
}

//Botão para pesquisar acionando a função
btn.onclick = () => {
    Pesquisar()
}