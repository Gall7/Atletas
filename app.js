function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
     //camel case aaaBBB

    // se o campoPesquisa for uma string sem nada
    if (campoPesquisa == "" ) { // para testar usar dois sinais de == 
        section.innerHTML = "Nada foi encontrado"
        return
    };
            //deixar em letra minuscula
    campoPesquisa = campoPesquisa.toLowerCase();
   
    let resultados =  "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    //para cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.titulo.toLowerCase();
        tags = dado.tags.toLowerCase();
        //se titulo includes campoPesquisa então, faça....
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemnto
            resultados += //somando dado 
        `
        <div class="item-resultado">
            <h2>
                 <a href="#" target="_blank">${dado.titulo}</a> 
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href= ${dado.link} target="_blank">Mais Informações</a>
            </div>
    `;
    }
    if (!resultados) {
        resultados = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
    }
    //chamar o innerHTML apenas uma vez, deixando a variavel resultados 
    section.innerHTML = resultados 
    }
        
    
}

