document.addEventListener("DOMContentLoaded", () => {
  const titleElem = document.querySelector("#title");
  const quantityInput = document.querySelector("#input-quant");
  const priceInput = document.querySelector("#input-price");
  const totalElem = document.querySelector("#total");

  const state = reactive({ quantity: 0, price: 0 });

  priceInput.value = state.price;
  quantityInput.value = state.quantity;

  whatchEffect(() => {
    console.log("Quantity", state.quantity);
    console.log("Price:", state.price);
    totalElem.innerHTML = `${state.quantity * state.price}`;
  });

  priceInput.oninput = (event) => {
    console.log(event.target.value);
    state.price = Number(event.target.value);
  };

  quantityInput.oninput = (event) => {
    state.quantity = Number(event.target.value);
  };
});
