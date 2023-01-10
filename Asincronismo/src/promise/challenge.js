import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetcData(urlApi){
    return fetch(urlApi);
}

// fetcData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .then(() => {
//         console.log('Hola');
//     })
//     .catch(error => console.log(error))

fetcData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
        return fetcData(`${API}/products/${products[0].id}`);
    })
    .then(response => response.json())
    .then(product => {
        console.log(product);
        return fetcData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.error(err))
    .finally(() => console.log('Finally'));