import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetcData(urlApi){
    return fetch(urlApi);
}

fetcData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
    })
    .then(() => {
        console.log('Hola');
    })
    .catch(error => console.log(error))