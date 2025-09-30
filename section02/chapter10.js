//1.Date 객체 생성방법
let date1 = new Date();
//console.log(date1);
let date2 = new Date("2024/12/25/10:10:10");
///console.log(date2);

//2.Timestamp : 협정 세계시 "1970.01.01 00시 00분 00초"로 부터
//UTC로부터 몇 ms가 지났는지 의미하는지 숫자 값
let ts1 = date1.getTime();
//console.log(ts1);

let date3 = new Date(ts1);
//console.log(date1, date3);

//3.시간요소 추출하는방법
let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

//console.log(year, month + 1, date, hour, minute, seconds);

//4.시간 수정
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(33);
date1.setSeconds(44);

console.log(date1);

//5.시간을 여러포맷 으로 출력
console.log(date1.toDateString());
console.log(date1.toLocaleString());
