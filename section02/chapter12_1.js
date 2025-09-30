function stateFood(food) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof food === "string") {
        resolve(food);
      } else {
        reject("음식이 아닙니다.");
      }
    }, 1000);
  });
  return promise;
}

function coolFood(food) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof food === "string") {
        resolve("식은 " + food);
      } else {
        reject("음식이 아닙니다.");
      }
    }, 1000);
  });
  return promise;
}

function freezeFood(food) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof food === "string") {
        resolve("냉동된 " + food);
      } else {
        reject("음식이 아닙니다.");
      }
    }, 1000);
  });
  return promise;
}

const f = stateFood("치킨");

f.then((result) => {
  console.log(result); // 치킨
  return coolFood(result);
})
  .then((result) => {
    console.log(result); // 식은 치킨
    return freezeFood(result);
  })
  .then((result) => {
    console.log(result); // 냉동된 식은 치킨
  })
  .catch((error) => {
    console.log(error);
  });
