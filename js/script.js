function Product(id, name, amount, price, imgLink, className) {
  this.id = id;
  this.name = name;
  this.amount = amount;
  this.price = price;
  this.imgLink = imgLink;
  this.className = className;
}

const itemsInBag = [];
const productAmountInBag = document.getElementById("items-in-bag");
const bagItemsDiv = document.getElementById("bag-container");
var count = 0;

function addItemsToBag(id, item, price, imgLink, className) {
  if (!count) {
    itemsInBag[count] = new Product(id, item, 1, price, imgLink, className);

    let content = `<div class="bag-content" id="item${count}">
                      <div style="width: 100%; display: flex; align-items: center; justify-content: center">
                        <img
                          class="${className}"
                          src="${imgLink}"
                          alt=""
                        />
                      </div>
                      <div class="info-product-bag">
                        <span class="product-name info-product">
                          ${item}
                        </span>
                        <span
                          id="productAmount${id}"
                          style="display: flex; align-items: center; justify-content: center"
                          >1</span
                        >
                        <div class="price-item-bag">
                          <p>R$ ${price}</p>
                          <p class="remove-item-bag" onclick="removeItemsFromBag(${count})">Remover</p>
                        </div>
                      </div>
                    </div>
                    <hr class="division" />`;

    let contentElement = document.createElement("div");
    contentElement.classList.add("bag-items");
    contentElement.innerHTML = content;
    bagItemsDiv.insertAdjacentElement("beforeend", contentElement);

    count++;
  } else {
    let control = 0;

    itemsInBag.forEach((obj) => {
      if (obj.name == item) {
        obj.amount++;
        control = 1;

        let productAmountSpan = document.getElementById(
          `productAmount${obj.id}`
        );

        productAmountSpan.innerHTML = obj.amount;

        return;
      }
    });

    // verifico se o último elemento que adicionei é igual, assim, posso criar um novo elemento no array com as informações do novo produto
    if (!control) {
      count++;
      itemsInBag[count] = new Product(id, item, 1, price, imgLink);

      let content = `<div class="bag-content" id="item${count}">
                      <div style="width: 100%; display: flex; align-items: center; justify-content: center">
                        <img
                          class="${className}"
                          src="${imgLink}"
                          alt=""
                        />
                      </div>
                      <div class="info-product-bag">
                        <span class="product-name info-product">
                        ${item}
                        </span>
                        <span
                          id="productAmount${id}"
                          style="display: flex; align-items: center; justify-content: center"
                          >1</span
                        >
                        <div class="price-item-bag">
                          <p>R$ ${price}</p>
                          <p class="remove-item-bag" onclick="removeItemsFromBag(${count})">Remover</p>
                        </div>
                      </div>
                    </div>
                    <hr class="division" />`;

      let contentElement = document.createElement("div");
      contentElement.classList.add("bag-items");
      contentElement.innerHTML = content;
      bagItemsDiv.insertAdjacentElement("beforeend", contentElement);
    } else {
      control = 0;
    }
  }

  let totalOfProducts = 0;

  itemsInBag.forEach((obj) => {
    totalOfProducts += obj.amount;

    console.log(`${obj.name}, ${obj.amount}, ${obj.price}`);
  });

  productAmountInBag.innerHTML = totalOfProducts;
}

function removeItemsFromBag(count) {
  delete itemsInBag[count];

  let elementToRemove = document.getElementById(`item${count}`);
  elementToRemove.remove();

  let totalOfProducts = 0;

  itemsInBag.forEach((obj) => {
    totalOfProducts += obj.amount;

    console.log(`${obj.name}, ${obj.amount}, ${obj.price}`);
  });

  productAmountInBag.innerHTML = totalOfProducts;
}
