const botaoEnviar = document.getElementById("BotaoEnviar")
var guardaTitulo = []
var guardaDescricao = []
var guardaData = []
botaoEnviar.addEventListener("click", (x, casoTitulo) =>{
    casoTitulo = ""
            const titulo = document.getElementById("Titulo").value
            const descricao = document.getElementById("Descricao").value
            const data = document.getElementById("Data").value
    if(titulo.length < 3){
        window.alert("O título deve conter no mínimo 3 caracteres")
        while(casoTitulo.length < 3){
        casoTitulo = window.prompt("Reescreva o titulo aqui: ")
        window.localStorage.setItem("titulo", casoTitulo)
        console.log(casoTitulo.length)
        }
    }
    else{
    window.localStorage.setItem("titulo", titulo)
    }
    if(descricao.length == 0){
        window.localStorage.setItem("descricao", "Sem dados de descrição.")
    }
    else{
    window.localStorage.setItem("descricao", descricao)
}
    if(data.length == 0){
        window.localStorage.setItem("data", "Sem dados de data.")
    }
    else{
    window.localStorage.setItem("data", data)
    }
    guardaData.push(window.localStorage.getItem("data"))
    guardaTitulo.push(window.localStorage.getItem("titulo"))
    guardaDescricao.push(window.localStorage.getItem("descricao"))
})
const botaoPesquisar = document.getElementById("BotaoPesquisar")
botaoPesquisar.addEventListener("click", () =>{
    const tituloP = document.getElementById("TituloP").value
    const descricaoP = document.getElementById("DescricaoP").value
    const dataP = document.getElementById("DataP").value
    const lista = document.getElementById("Lista")
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }
    for(var i = 0; i < guardaTitulo.length; i++){
        if(tituloP == guardaTitulo[i] || descricaoP == guardaDescricao[i] || dataP == guardaData[i]){
            var crialista = document.createElement("li")
            var crialista2 = document.createElement("li")
            var crialista3 = document.createElement("li")
            var crialista4 = document.createElement("li")
            crialista.innerHTML = guardaTitulo[i]
            lista.appendChild(crialista)
            crialista2.innerHTML = guardaDescricao[i]
            lista.appendChild(crialista2)
            crialista3.innerHTML = guardaData[i]
            lista.appendChild(crialista3)
            crialista4.innerHTML = "----------------------"
            lista.appendChild(crialista4)
            
        }
    }
})

