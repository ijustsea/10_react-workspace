function orderFood(food) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(food);
    }, 1000);
  });
  return promise;
}

function cooldownFood(food) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const cooldownfood = `식은 ${food}`;
      resolve(cooldownfood);
    }, 1000);
  });
  return promise;
}

function freezeFood(food) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const freezefood = `얼린 ${food}`;
      resolve(freezefood);
    }, 1000);
  });
  return promise;
}

orderFood("치킨1")
  .then((food) => {
    console.log(food); //떡볶이
    return cooldownFood(food);
  })
  .then((cooldownfood) => {
    console.log(cooldownfood); //식은 떡볶이
    return freezeFood(cooldownfood);
  })
  .then((freezefood) => {
    console.log(freezefood); //얼린 식은 떡볶이
  });
