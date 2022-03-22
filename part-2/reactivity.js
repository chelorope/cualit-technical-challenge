document.addEventListener("DOMContentLoaded", () => {
  const titleElem = document.querySelector("#title");
  const quantityInput = document.querySelector("#input-quant");
  const priceInput = document.querySelector("#input-price");
  const totalElem = document.querySelector("#total");

  let activeEffect = null;
  const subscriptions = new WeakMap();

  function getSubscribersForProperty(target, key) {
    if (!subscriptions[target]) {
      subscriptions[target] = new Map();
    }

    if (!subscriptions[target][key]) {
      subscriptions[target][key] = new Set();
    }
    return subscriptions[target][key];
  }

  function track(target, key) {
    if (activeEffect) {
      const effects = getSubscribersForProperty(target, key);
      effects.add(activeEffect);
    }
  }

  function trigger(target, key) {
    const effects = getSubscribersForProperty(target, key);
    effects.forEach((effect) => effect());
  }

  function whatchEffect(update) {
    const effect = () => {
      activeEffect = effect;
      update();
      activeEffect = null;
    };
    effect();
  }

  const reactive = (object) => {
    const handler = {
      get(target, property, receiver) {
        track(target, property);
        console.log(target, property);
        return Reflect.get(target, property, receiver);
      },
      set(target, property, value, receiver) {
        trigger(target, property);
        console.log(`${property}: ${value}`);
        return Reflect.set(target, property, value, receiver);
      },
    };
    return new Proxy(object, handler);
  };

  const state = reactive({ quantity: 0, price: 0 });

  quantityInput.value = state.price;

  priceInput.oninput = (event) => {
    state.price = event.target.value;
  };

  console.log(person);
});
