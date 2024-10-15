const iss = "https://api.wheretheiss.at/v1/satellites/25544";

fetch(iss).then(response =>{
    if(!response.ok){
        throw new error(`erro: ${response.status}`);
    }
    return response.json();
}).then(data =>{
    console.log(data);
}).catch(error => {
    console.log(`houve um problema com a requisição:`, error)
});