document.addEventListener("DOMContentLoaded", () => {
  const quantityInput = document.querySelector("#input-quant");
  const priceInput = document.querySelector("#input-price");
  const totalElem = document.querySelector("#total");

  const state = reactive({ quantity: 0, price: 0 });

  watchEffect(() => {
    totalElem.innerHTML = `Quantity x Price = ${state.quantity * state.price}`;
  });

  priceInput.value = state.price;
  quantityInput.value = state.quantity;

  priceInput.oninput = (event) => {
    state.price = Number(event.target.value);
  };

  quantityInput.oninput = (event) => {
    state.quantity = Number(event.target.value);
  };
});
