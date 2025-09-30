//1.push : 배열 맨뒤 새로운 요소 추가하는 메소드
let arr1 = [1, 2, 3];
let newLength = arr1.push(4, 5, 6, 7);
// console.log(arr1, newLength);

//2.pop : 배열 맨뒤 요소 제거하고 반환
let arr2 = [1, 2, 3];
let deletedItem = arr2.pop();
//console.log(arr2, deletedItem);

//3.shift :  배열 맨앞 요소 제거하고 반환
let arr3 = [1, 2, 3];
let shiftItem = arr3.shift();
//console.log(arr3, shiftItem);

//4.unshift : 배열 맨앞 새로운 요소 추가하는 메소드
let arr4 = [1, 2, 3];
let newLength2 = arr4.unshift(0, 1, 2);
// console.log(arr4, newLength2);

//5.slice : 배열의 특정 범위를 잘라내서 새로운 배열 반환
let arr5 = [1, 2, 3, 4, 5];
let sliceArr = arr5.slice(2, 5);
let sliceArr2 = arr5.slice(2);
let sliceArr3 = arr5.slice(-2);
// console.log(arr5, sliceArr); //원본영향 x 얕은복사
// console.log(sliceArr2);
// console.log(sliceArr3);

//6.concat : 두개의 서로다른 배열을 이어붙여주는 메소드
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatArr = arr6.concat(arr7);
//console.log(concatArr);
