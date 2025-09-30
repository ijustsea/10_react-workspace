//async : 함수명 앞에 async 키워드 붙이면 비동기 함수로 정의된다.
//함수가 promise를 return 하도록 변환해주는 키워드

// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ name: "차은우", id: "cha123" });
//     }, 1000);
//   });
// }

async function getData() {
  return {
    name: "차은우",
    id: "cha123",
  };
}

//console.log(getData());

//await : async함수 내부에서만 사용한 키워드
//비동기 함수가 다 처리되기를 기다리는 역할

// function printData() {
//   getData().then((result) => {
//     console.log(result);
//   });
// }

async function printData() {
  const data = await getData();
  console.log(data);
}

printData();
