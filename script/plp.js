const $shoppingsInfo = document.querySelector(".shopping-info");

function renderData() {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const productFragment = document.createDocumentFragment();
        data.forEach((user) => {
          const product = document.createElement("a");
          product.className = "shoping-item__info";
          product.href = `/pages/pdp.html?id=${user.id}`
          product.innerHTML = `
            <img src="../images/telephone.png">
            <p>${user.title}</p>
        <p>$${user.creationAt}</p>
        <p>$${user.price}</p>
        <del>$89.99 · 81% OFF</del>
        `;
          productFragment.append(product);
        });
        $shoppingsInfo.append(productFragment);
      });
  }
  renderData();