//Promise : 비동기 작업을 감싸는 객체
//비동기작업 실행, 상태관리, 결과저장, 병렬실행, 다시실행

//Promise 상태 : Pending(대기), Fulfilled(성공), Rejected(실패)

const promise = new Promise((resolve, reject) => {
  //비동기 작업 실행중
  //executor
  setTimeout(() => {
    const num = null;
    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 2000);
});

//then | catch  메서드 : Promise가 비동기 작업을 성공 | 실패후에만 실행된다.
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });
  return promise;
}

const p = add10(0);
p.then((result) => {
  console.log(result);
  return add10(result);
})
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .catch((error) => {
    console.log(error);
    return add10(result);
  });
