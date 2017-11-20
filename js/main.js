let defaultProduct = document.getElementsByClassName("product-content");
let productLink = document.getElementsByClassName("products__link");

for (let i = 0; i < defaultProduct.length; i++) {
  //Добавление класса product-content--selected и удаление классов
  // product-content--selected и product-content--selected-hover после отмены выбора
  defaultProduct[i].addEventListener("click", function () {
    if (this.classList.contains("product-content--disabled")) {
      return;
    }
    if (!this.classList.contains("product-content--selected")) {
      this.classList.add("product-content--selected");
    } else {
      this.classList.remove("product-content--selected");
      this.classList.remove("product-content--selected-hover");
    }
  });

  //Добавление класса product-content--selected-hover после ухода курсора
  defaultProduct[i].addEventListener("mouseleave", function () {
    if (this.classList.contains("product-content--selected")) {
      this.classList.add("product-content--selected-hover");
    }
  });

  //Выбор карточки товара после клика на текст купи в описании карточки
  productLink[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    if (defaultProduct[i].classList.contains("product-content--disabled")) {
      return;
    }
    if (!defaultProduct[i].classList.contains("product-content--selected")) {
      defaultProduct[i].classList.add("product-content--selected-hover");
      defaultProduct[i].classList.add("product-content--selected");
    }
  });
}
