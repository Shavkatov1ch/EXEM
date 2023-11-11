const $categories = document.querySelector(".categories");
const $shoppings = document.querySelector(".shopping");
const $signin = document.querySelector(".signin");
const $register = document.querySelector(".register")

axios("https://api.escuelajs.co/api/v1/categories")
  .then(response => renderData(response.data))
  .catch(err => console.log(err))

function renderData(userdata){
    const productFragment = document.createDocumentFragment();
    userdata.map(user => {
      const card =document.createElement("a");
      card.className = "categories-item";
      card.href = "/pages/plp.html"
      card.innerHTML=`
             <img src="./images/clotherz.jfif">
             <p>${user.name}</p>
      `
      productFragment.appendChild(card)
    })
    $categories.appendChild(productFragment)
  };



  axios("https://api.escuelajs.co/api/v1/products")
  .then(response => heroData(response.data))
  .catch(err => console.log(err))

function heroData(userdata){
    const productFragment = document.createDocumentFragment();
    userdata.map(user => {
      const card =document.createElement("a");
      card.className = "categories-item";
      card.href = "/pages/plp.html"
      card.innerHTML=`
             <img src="./images/shopping.jfif">
             <p class="p">${user.title}</p>
             <p class="p">$${user.price}</p>
             <del class="dell">$89.99 · 81% OFF</del>
      `;
      productFragment.appendChild(card)
    })
    $shoppings.appendChild(productFragment)
  };
