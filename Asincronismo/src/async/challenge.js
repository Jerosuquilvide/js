import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetcData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFunction = async (urlApi) => {
    try{
        const products = await fetcData(`${urlApi}/products`);
        const product = await fetcData(`${urlApi}/products/${products[0].id}`);
        const categorie = await fetcData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title)
        console.log(categorie.name);
    }catch (err){
        console.error(err);
    }
}

anotherFunction(API);