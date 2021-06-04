let url = "https://tt905-musicas.herokuapp.com/musicas/"

async function callFetchWithGet(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers
    }
    const output = document.getElementById("json");
    const response = await fetch(url, options);

    if(response.status >= 200 &&response.status <= 300){
        console.log("Deu certo");
        output.innerHTML = await response.text();
    } else{
        console.log("Deu ruim");
    }
}

async function callFetchWithPost(musica, artista, duracao){
    const options = {
        method : 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'content-type' : 'application/json'
        },
        body : JSON.stringify ({
            'title': musica,
            'artist': artista,
            'duration': duracao
        })     
    }
    await fetch(url, options);
}

async function callFetchWithPut(id, novaMusica, novoArtista, novaDuracao){
    const options = {
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'content-type' : 'application/json'
        },
        body : JSON.stringify ({
            'title': novaMusica,
            'artist': novoArtista,
            'duration': novaDuracao
        })  
    }
    await fetch(`${url}${id}`, options);
  
}

async function callFetchWithDelete(id){
    const options = {
        method : 'DELETE',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'content-type' : 'application/json'
        },
    }
    await fetch(`${url}${id}`, options);
}

//////////////////////////////////////////

function submitPost(){
    const form = document.forms['postForm'];
    const musica = form ["title"].value;
    const artista = form ["artist"].value;
    const duracao = form ["duration"].value;

    callFetchWithPost(musica, artista, duracao);
    return false; //evitar reload
}

function submitPut(){
    const form = document.forms['putForm'];
    const id = form ["id"].value;
    const musica = form ["title"].value;
    const artista = form ["artist"].value;
    const duracao = form ["duration"].value;

    callFetchWithPut(id, musica, artista, duracao);
    return false; //evitar reload
}

function submitDelete(){
    const form = document.forms['deleteForm'];
    const id = form ["id"].value;

    callFetchWithDelete(id);
    return false; //evitar reload
}