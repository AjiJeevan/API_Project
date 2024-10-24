fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{
    let productsEl = ""

    for (let product of json){
        productsEl += `
        <div class="card col-12 col-md-6 col-lg-4 col-xl-3">
            <img src="${product.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <h6 class="card-text">$${product.price}</h6>
                <p class="card-text  product-description">${product.description}</p>
                <div Class="text-center">
                    <a href="#" class="btn btn-warning ">View Product</a>
                </div>
            </div>
            
        </div>`
    }

    let productList = document.getElementById("products-list")
    productList.innerHTML = productsEl
})