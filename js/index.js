//                             Sodda masalalar

// ### 1. Length

document.getElementById("first--btn").addEventListener("click", function () {
  let firstArr = [];
  let firstArrLenght = Math.trunc(Math.random() * 14) + 1;
  let firstAnswer = "Massiv:";

  for (let i = 0; i < firstArrLenght; i++) {
    firstArr[i] = Math.trunc(Math.random() * 1000);
  }

  firstAnswer += firstArr;

  firstAnswer += "<br> Uning elementlar soni:" + firstArr.length;

  document.getElementById("first--answer").innerHTML = firstAnswer;
  document.getElementById("first--close").onclick = function () {
    document.getElementById("first--answer").innerHTML = " ";
  };
});

// 2. Berilgan matndagi belgilar sonini aniqlang.
document.getElementById("second--btn").addEventListener("click", function () {
  let secondValue = document.getElementById("second--value").value;

  let secondAnswer = "Matn:  " + secondValue;

  secondAnswer +=
    secondValue.length != 0
      ? "<br> Belgilar soni: " + secondValue.length
      : "Bosh satr";

  document.getElementById("second--answer").innerHTML = secondAnswer;
  document.getElementById("second--close").onclick = function () {
    document.getElementById("second--answer").innerHTML = " ";
  };
});

// 3. Bo'sh bo'lmagan massivning oxirgi elementini
//  aniqlash uchun length metodidan foydalaning.
document.getElementById("third--btn").addEventListener("click", function () {
  let thirdArr = [];
  let thirdArrLenght = Math.trunc(Math.random() * 14) + 1;
  let thirdAnswer = "Massiv:";

  for (let i = 0; i < thirdArrLenght; i++) {
    thirdArr[i] = Math.trunc(Math.random() * 1000);
  }

  endIndex = thirdArr.length - 1;
  thirdAnswer += thirdArr + "<br>Oxirgi elementi: " + thirdArr[endIndex];

  document.getElementById("third--answer").innerHTML = thirdAnswer;
  document.getElementById("third--close").onclick = function () {
    document.getElementById("third--answer").innerHTML = " ";
  };
});

//                               ### 2. Concat
// 4. Ikki ta massivni birlashtiring va yangi hosil bo'lgan massivni qaytaring.
document.getElementById("four--btn").addEventListener("click", function () {
  let fourArr1 = [];
  let fourArr2 = [];
  let fourArrLenght = Math.trunc(Math.random() * 14) + 1;
  let fourAnswer = "1-Massiv: ";

  for (let i = 0; i < fourArrLenght; i++) {
    fourArr1[i] = Math.trunc(Math.random() * 1000);
  }

  fourAnswer += fourArr1 + "<br>2-Massiv: ";
  for (let i = 0; i < fourArrLenght; i++) {
    fourArr2[i] = Math.trunc(Math.random() * 1000);
  }
  fourAnswer += fourArr2 + "<br>" + "<br>Yangi massiv: ";
  let fourResArr = fourArr1.concat(fourArr2);

  for (let i = 0; i < fourResArr.length; i++) {
    fourAnswer += " " + fourResArr[i] + " ";
  }

  document.getElementById("four--answer").innerHTML = fourAnswer;

  document.getElementById("four--close").onclick = function () {
    document.getElementById("four--answer").innerHTML = " ";
  };
});

// 5. Uchta satrni qo‘shib, bitta matn yaratib oling.
document.getElementById("five--btn").addEventListener("click", function () {
  let fiveFirstText = document.getElementById("five--value--first").value;
  let fiveSecondText = document.getElementById("five--value--second").value;
  let fiveThirdText = document.getElementById("five--value--third").value;

  let fiveAnswer =
    "Kiritilgan satrlar: " +
    ("1 - " + fiveFirstText) +
    " " +
    ("2 - " + fiveSecondText) +
    " " +
    ("3 - " + fiveThirdText) +
    "<br>";

  fiveAnswer +=
    " Birlashtirilgan Natija: " +
    fiveFirstText.concat(fiveSecondText, fiveThirdText);

  document.getElementById("five--answer").innerHTML = fiveAnswer;

  document.getElementById("five--close").onclick = function () {
    document.getElementById("five--answer").innerHTML = " ";
  };
});
