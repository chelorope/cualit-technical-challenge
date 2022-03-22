let activeEffect = null;
const subscriptions = new WeakMap();

function getSubscribersForProperty(target, key) {
  if (!subscriptions.get(target)) {
    subscriptions.set(target, new Map());
  }

  if (!subscriptions.get(target).get(key)) {
    subscriptions.get(target).set(key, new Set());
  }
  return subscriptions.get(target).get(key);
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

const reactive = (object) => {
  const handler = {
    get(target, key, receiver) {
      track(target, key);
      return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
      Reflect.set(target, key, value, receiver);
      trigger(target, key);
    },
  };
  return new Proxy(object, handler);
};

function whatchEffect(update) {
  const effect = () => {
    activeEffect = effect;
    update();
    activeEffect = null;
  };
  effect();
}
