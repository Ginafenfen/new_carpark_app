"use strict";
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
