"use strict"; ///question : button click +1 check how to add 1 each...

////////////////////////////////////////////////////////////

// once button click==> change to booked.
// function red1() {
//   const changeWord = document.querySelector(".slot_1");
//   changeWord.innerText = "Booked";
//   changeWord.style.backgroundColor = "red";
// }
// function red2() {
//   const changeWord = document.querySelector(".slot_2");
//   changeWord.innerText = "Booked";
//   changeWord.style.backgroundColor = "red";
// }

// ////////////////////////////////////////////////////////////
// //button 3 -increament//

// function red3() {
//   const changeWord = document.querySelector(".slot_3");
//   changeWord.innerText = "Booked";
//   changeWord.style.backgroundColor = "red";
// }
// function red4() {
//   const changeWord = document.querySelector(".slot_4");
//   changeWord.innerText = "Booked";
//   changeWord.style.backgroundColor = "red";
// }
// function red5() {
//   const changeWord = document.querySelector(".slot_5");
//   changeWord.innerText = "Booked";
//   changeWord.style.backgroundColor = "red";
// }
// ////////////////////////////////////////////
// function red6() {
//   const changeWord = document.querySelector(".slot_6");
//   changeWord.innerText = "Booked";
//   changeWord.style.backgroundColor = "red";
// }

// function red7() {
//   const changeWord = document.querySelector(".slot_7");
//   changeWord.innerText = "Booked";
//   changeWord.style.backgroundColor = "red";
// }

// function red8() {
//   const changeWord = document.querySelector(".slot_8");
//   changeWord.innerText = "Booked";
//   changeWord.style.backgroundColor = "red";
// }
// function red9() {
//   const changeWord = document.querySelector(".slot_9");
//   changeWord.innerText = "Booked";
//   changeWord.style.backgroundColor = "red";
// }
// function red10() {
//   const changeWord = document.querySelector(".slot_10");
//   changeWord.innerText = "Booked";
//   changeWord.style.backgroundColor = "red";
// }
// function red11() {
//   const changeWord = document.querySelector(".slot_11");
//   changeWord.innerText = "Booked";
//   changeWord.style.backgroundColor = "red";
// }
// function red12() {
//   const changeWord = document.querySelector(".slot_12");
//   changeWord.innerText = "Booked";
//   changeWord.style.backgroundColor = "red";
// }
// function red13() {
//   const changeWord = document.querySelector(".slot_13");
//   changeWord.innerText = "Booked";
//   changeWord.style.backgroundColor = "red";
// }
// function red14() {
//   const changeWord = document.querySelector(".slot_14");
//   changeWord.innerText = "Booked";
//   changeWord.style.backgroundColor = "red";
// }
// function red15() {
//   const changeWord = document.querySelector(".slot_15");
//   changeWord.innerText = "Booked";
//   changeWord.style.backgroundColor = "red";
// }
//////////////////////////////////////////////////////////////////
////==button 1 -increament==//////
//function sumTotalClick(){

// }
// const add1 = document.querySelector(".slot_1");
// let increament1 = document.querySelector("#number");
// let integer1 = 0;

// add1.addEventListener("click", function () {
//   integer1 += 1;
//   increament1.innerHTML = integer1;
// });

// //==button 2 -increament==//
// const add2 = document.querySelector(".slot_2");

// add2.addEventListener("click", function () {
//   integer1 += 1;
//   console.log(integer1);
//   increament1.innerHTML = integer1;
// });

// //==button 3 -increament==//
// const add3 = document.querySelector(".slot_3");

// add3.addEventListener("click", function () {
//   integer1 += 1;
//   console.log(integer1);
//   increament1.innerHTML = integer1;
// });

// //==button 4 -increament==//
// const add4 = document.querySelector(".slot_4");

// add4.addEventListener("click", function () {
//   integer1 += 1;
//   console.log(integer1);
//   increament1.innerHTML = integer1;
// });

// const add5 = document.querySelector(".slot_5");

// add5.addEventListener("click", function () {
//   integer1 += 1;
//   console.log(integer1);
//   increament1.innerHTML = integer1;
//   alert("this date has fully booked");
//   const lastbtn = document.querySelector(".here1");
//   lastbtn.style.backgroundColor = "red";
// });
/////June1////
let date1 = ["slot_1", "slot_2", "slot_3", "slot_4", "slot_5"];

for (let i in date1) {
  const table1 = document.querySelector(".table1");
  let clickBtn1 = document.createElement("button");
  table1.append(clickBtn1);
  clickBtn1.id = "clickBtn1";
  clickBtn1.innerHTML = date1[i];
  // document.body.appendChild(clickBtn2);
  clickBtn1.style.backgroundColor = "green";
}

const btns1 = document.querySelectorAll("#clickBtn1");

let integer = 0;

btns1.forEach(function (btn1) {
  btn1.addEventListener("click", function (e) {
    console.log("target", e.target);
    e.target.innerText = "Booked";
    e.target.style.backgroundColor = "red";

    //+1 once button is cliked///
    const storeTheNumber1 = document.querySelector(".storeTheNumber1");
    integer += 1;
    storeTheNumber1.innerHTML = integer;
    if (storeTheNumber1.innerText >= 5) {
      alert("You have booked the last slot");
      const here1 = document.querySelector(".here1");
      here1.style.backgroundColor = "red";
    }
  });
});

////June2//////

let date2 = ["slot_1", "slot_2", "slot_3", "slot_4", "slot_5"];

for (let i in date2) {
  const table2 = document.querySelector(".table2");
  let clickBtn2 = document.createElement("button");
  table2.append(clickBtn2);
  clickBtn2.id = "clickBtn2";
  clickBtn2.innerHTML = date2[i];
  // document.body.appendChild(clickBtn2);
  clickBtn2.style.backgroundColor = "green";
}

const btns2 = document.querySelectorAll("#clickBtn2");

let integer1 = 0;

btns2.forEach(function (btn2) {
  btn2.addEventListener("click", function (e) {
    console.log("target", e.target);
    e.target.innerText = "Booked";
    e.target.style.backgroundColor = "red";

    //+1 once button is cliked///
    const storeTheNumber2 = document.querySelector(".storeTheNumber2");
    integer1 += 1;
    storeTheNumber2.innerHTML = integer1;
    if (storeTheNumber2.innerText >= 5) {
      alert("You have booked the last slot");
      const here2 = document.querySelector(".here2");
      here2.style.backgroundColor = "red";
    }
  });
});

/////June3////
let date3 = ["slot_1", "slot_2", "slot_3", "slot_4", "slot_5"];
let integer3 = 0;
for (let i in date3) {
  const table3 = document.querySelector(".table3");
  let clickBtn3 = document.createElement("button");
  table3.append(clickBtn3);
  clickBtn3.id = "clickBtn3";
  clickBtn3.innerHTML = date3[i];
  // document.body.appendChild(clickBtn3);
  clickBtn3.style.backgroundColor = "green";
}

const btns3 = document.querySelectorAll("#clickBtn3");
btns3.forEach(function (btn3) {
  btn3.addEventListener("click", function (e) {
    console.log("target", e.target);
    e.target.innerText = "Booked";
    e.target.style.backgroundColor = "red";
    const storeTheNumber3 = document.querySelector(".storeTheNumber3");

    ///add 1 once button click///
    integer3 += 1;
    storeTheNumber3.innerHTML = integer3;
    if (storeTheNumber3.innerText >= 5) {
      alert("You have booked the last slot");
      const here3 = document.querySelector(".here3");
      here3.style.backgroundColor = "red";
    }
  });
});

/////////////////////////////////////////////////

// function please2() {
//   for (let k = 0; k < date3.length; k++) {
//     document.querySelector("#bookingSlot3").innerHTML =
//       "<button>" +
//       "slot_" +
//       date3[0] +
//       "</button>" +
//       "<button>" +
//       "slot_" +
//       date3[1] +
//       "</button>" +
//       "<button>" +
//       "slot_" +
//       date3[2] +
//       "</button>" +
//       "<button>" +
//       "slot_" +
//       date3[3] +
//       "</button>" +
//       "<button>" +
//       "slot_" +
//       date3[4] +
//       "</button>";
//   }
// }
// please2();

// let integer2 = 0;

// add1.addEventListener("click", function () {
//   integer2 += 1;
//   increament2.innerHTML = integer2;
// });
// ////==button 10==//////
// const add10 = document.querySelector(".slot_10");
// let increament2 = document.querySelector("#number");
// let integer2 = 0;
// add10.addEventListener("click", function () {
//   integer2 += 1;
//   increament2.innerHTML = integer2;
//   alert("this date has fully booked");
//   const lastbtn = document.querySelector(".here2");
//   lastbtn.style.backgroundColor = "red";
// });

//////adding the function for 5 slot click then day 1 become red
// let increament2 = document.querySelector("#number1");
// let integer2 = 0;
// let btn6Onwards = [6, 7, 8, 9, 10];

// for (let i = 0; i < btn6Onwards.length; i + 1) {
//   const add6 = document.querySelector(".slot_6");

//   add6.addEventListener("click", function () {
//     integer2 += 1;
//     increament2.innerHTML = integer2;
//   });
// }
//
// function sumTheClickBtn() {
//   const add6 = document.querySelector(".slot_6");
//   let increament2 = document.querySelector("#number");
//   let integer2 = 0;
//   integer2 += 1;
//   increament2.innerHTML = integer2;

//   console.log(integer2);
// }
// sumTheClickBtn(increament2.addEventListener.click;);
// document.querySelector(".slot_5").disabled = true;
