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
// 4-mashq 1. Ikki ta massivni birlashtiring va yangi hosil bo'lgan massivni qaytaring.
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

// 5-mashq 2. Uchta satrni qo'shib, bitta matn yaratib oling.
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

//6-mashq 3. Ikki massivni birlashtirib, keyin ularga yangi element qo'shib, natijani toping.
document.getElementById("six--btn").addEventListener("click", function () {
  let sixArr1 = [];
  let sixArr2 = [];

  let sixArrLenght = Math.trunc(Math.random() * 14) + 1;

  for (let i = 0; i < sixArrLenght; i++) {
    sixArr1[i] = Math.trunc(Math.random() * 1000);
    sixArr2[i] = Math.trunc(Math.random() * 1000);
  }

  let sixAnswer = "1-Massiv: " + sixArr1 + "<br>2-Massiv: " + sixArr2;

  let sixResArr = sixArr1.concat(sixArr2, "Yangi element");

  sixAnswer += "<br><br> Natija: <br>";
  for (let i = 0; i < sixResArr.length; i++) {
    sixAnswer += " " + sixResArr[i] + " ";
  }

  document.getElementById("six--answer").innerHTML = sixAnswer;

  document.getElementById("six--close").onclick = function () {
    document.getElementById("six--answer").innerHTML = " ";
  };
});

// ###                     3. Includes

//  7-mashq 1. Berilgan massiv ichida qidirilayotgan element
//  borligini aniqlang.

document.getElementById("seven--btn").addEventListener("click", function () {
  let sevenValue = document.getElementById("seven--value").value;

  let sevenStrArr = [
    "salom",
    "olam",
    "Najot",
    "talim",
    "Fergana",
    "O'zbekiston",
  ];

  let sevenArr = [];

  let sevenArrLenght = Math.trunc(Math.random() * 14) + 1;

  for (let i = 0; i < sevenArrLenght; i++) {
    sevenArr[i] = Math.trunc(Math.random() * 100);
  }
  sevenArr = sevenArr.concat(sevenStrArr);
  let sevenAnswer = "Massiv: ";

  for (let i = 0; i < sevenArr.length; i++) {
    sevenAnswer += " " + sevenArr[i] + " ";
  }
  sevenAnswer += "<br>Massivda ";
  sevenAnswer += sevenArr.includes(sevenValue) ? "Mavjud" : "Mavjud Emas";

  document.getElementById("seven--answer").innerHTML = sevenAnswer;

  document.getElementById("seven--close").onclick = function () {
    document.getElementById("seven--answer").innerHTML = " ";
  };
});

// 8-mashq 2. Matn ichida qidirilayotgan so'zning mavjud
//  yoki mavjud emasligini tekshiring.

document.getElementById("eight--btn").addEventListener("click", function () {
  let eightValue = document.getElementById("eight--value").value;
  let eightArr = [
    "salom",
    "javascript",
    "olam",
    "Najot",
    "talim",
    "Fergana",
    "O'zbekiston",
  ];

  let eightAnswer = "Massiv: " + eightArr + "<br>";
  eightAnswer += "<br>Massivda ";
  eightAnswer += eightArr.includes(eightValue) ? "Mavjud" : "Mavjud Emas";

  document.getElementById("eight--answer").innerHTML = eightAnswer;

  document.getElementById("eight--close").onclick = function () {
    document.getElementById("eight--answer").innerHTML = " ";
  };
});

// 9-mashq 3. Massiv ichida 10 dan katta son mavjud
//  yoki yo'qligini aniqlang.

document.getElementById("nine--btn").addEventListener("click", function () {
  let nineArr = [];

  let nineArrLenght = Math.trunc(Math.random() * 14) + 1;

  for (let i = 0; i < nineArrLenght; i++) {
    nineArr[i] = Math.trunc(Math.random() * 15);
  }

  let nineAnswer = "Massiv: " + nineArr;

  nineArr.sort(function (a, b) {
    return b - a;
  });

  let nineMaxValue = nineArr[0];

  nineAnswer += "<br>Natija:  ";

  nineCheck = false;

  let nineCheckAnswer = "Mavjud emas";

  for (let i = 10; i >= 0; i++) {
    nineCheck = nineArr.includes(i);

    if (nineCheck == true) {
      nineCheckAnswer = "Mavjud";
      break;
    }

    if (i >= nineMaxValue) {
      break;
    }
  }

  nineAnswer += nineCheckAnswer;

  document.getElementById("nine--answer").innerHTML = nineAnswer;

  document.getElementById("nine--close").onclick = function () {
    document.getElementById("nine--answer").innerHTML = " ";
  };
});

// ###                                   4. IndexOf, LastIndexOf
// 10-mashq 1. Massivda berilgan elementning birinchi paydo bo'lish indeksini toping.

document.getElementById("ten--btn").addEventListener("click", function () {
  let tenArr = [];
  let tenSearch = parseInt(document.getElementById("ten--value").value);

  let tenArrLenght = Math.trunc(Math.random() * 20) + 1;
  for (let i = 0; i < tenArrLenght; i++) {
    tenArr[i] = Math.trunc(Math.random() * 15);
  }

  let tenAnswer = "Massiv: " + tenArr;

  let tenIndeks = tenArr.indexOf(tenSearch);

  tenAnswer += "<br>1-uchrydigan indeksi: ";

  tenAnswer += tenIndeks == -1 ? "  Mavjud emas" : tenIndeks;

  document.getElementById("ten--answer").innerHTML = tenAnswer;

  document.getElementById("ten--close").onclick = function () {
    document.getElementById("ten--answer").innerHTML = " ";
  };
});

//11-mashq 2. Massivda berilgan elementning oxirgi paydo bo'lish indeksini aniqlang.

document.getElementById("eleven--btn").addEventListener("click", function () {
  let elevenArr = [];

  let elevenSearch = parseInt(document.getElementById("eleven--value").value);

  let elevenArrLenght = Math.trunc(Math.random() * 20) + 1;
  for (let i = 0; i < elevenArrLenght; i++) {
    elevenArr[i] = Math.trunc(Math.random() * 15);
  }

  let elevenAnswer = "Massiv: " + elevenArr;

  let elevenIndeks = elevenArr.lastIndexOf(elevenSearch);

  elevenAnswer += "<br>Oxirgi uchrydigan indeksi: ";

  elevenAnswer += elevenIndeks == -1 ? "  Mavjud emas" : elevenIndeks;

  document.getElementById("eleven--answer").innerHTML = elevenAnswer;

  document.getElementById("eleven--close").onclick = function () {
    document.getElementById("eleven--answer").innerHTML = " ";
  };
});

//12-mashq 3. Berilgan matnda "a" harfi birinchi va oxirgi marta qayerda paydo bo'lishini toping.
document.getElementById("twelve--btn").addEventListener("click", function () {
  let twelveSearchText = document.getElementById("twelve--value").value;

  let twelveAnswer = "Matn: " + twelveSearchText;

  let twelveLastIndeks = twelveSearchText.lastIndexOf("a");
  let twelveFirstIndeks = twelveSearchText.indexOf("a");

  twelveAnswer += "<br>Natija: <br> ";

  twelveAnswer +=
    twelveFirstIndeks == -1
      ? "  Mavjud emas"
      : "1-chi uchradigan indeksi: " + twelveFirstIndeks + "<br>";
  twelveAnswer +=
    twelveLastIndeks == -1
      ? "  Mavjud emas"
      : "oxirgi uchraydigan indeksi: " + twelveLastIndeks + "<br>";

  document.getElementById("twelve--answer").innerHTML = twelveAnswer;

  document.getElementById("twelve--close").onclick = function () {
    document.getElementById("twelve--answer").innerHTML = " ";
  };
});

// ### 5. Sort
// 13-mashq 1. Massivdagi sonlarni o'sish tartibida joylashtiring.

document
  .getElementById("thirdteen--btn")
  .addEventListener("click", function () {
    let thirdteenArr = [];

    let thirdteenArrLenght = Math.trunc(Math.random() * 14) + 1;

    for (let i = 0; i < thirdteenArrLenght; i++) {
      thirdteenArr[i] = Math.trunc(Math.random() * 15);
    }

    let thirdteenAnswer = "Boshlang'ich Massiv: " + thirdteenArr;

    thirdteenArr.sort(function (a, b) {
      return a - b;
    });

    thirdteenAnswer += " Sortirovka qilingan: <br>" + thirdteenArr;

    document.getElementById("thirdteen--answer").innerHTML = thirdteenAnswer;

    document.getElementById("thirdteen--close").onclick = function () {
      document.getElementById("thirdteen--answer").innerHTML = " ";
    };
  });

// 14-mashq 2. Alfavit bo'yicha massivdagi so'zlarni tartiblang.
document.getElementById("fourteen--btn").addEventListener("click", function () {
  let fourteenArr = [
    "Assalom",
    "aleykum",
    "java",
    "script",
    "olam",
    "Najot",
    "talim",
    "Fergana",
    "O'zbekiston",
  ];

  let fourteenAnswer = "Massiv: " + fourteenArr;
  fourteenAnswer += "<br>Natija: <br> ";

  fourteenArr.sort();
  fourteenAnswer += fourteenArr;

  document.getElementById("fourteen--answer").innerHTML = fourteenAnswer;

  document.getElementById("fourteen--close").onclick = function () {
    document.getElementById("fourteen--answer").innerHTML = " ";
  };
});

// 15-mashq 3. Massivdagi sonlarni kamayish tartibida joylashtiring.
document.getElementById("fiveteen--btn").addEventListener("click", function () {
  let fiveteenArr = [];

  let fiveteenArrLenght = Math.trunc(Math.random() * 14) + 1;

  for (let i = 0; i < fiveteenArrLenght; i++) {
    fiveteenArr[i] = Math.trunc(Math.random() * 15);
  }

  let fiveteenAnswer = "Boshlang'ich Massiv: " + fiveteenArr;

  fiveteenArr.sort(function (a, b) {
    return b - a;
  });

  fiveteenAnswer += " Sortirovka qilingan: <br>" + fiveteenArr;

  document.getElementById("fiveteen--answer").innerHTML = fiveteenAnswer;

  document.getElementById("fiveteen--close").onclick = function () {
    document.getElementById("fiveteen--answer").innerHTML = " ";
  };
});

// ###                             6. Reverse
// 16-mashq 1. Massivni teskari tartibda chiqaring.
document.getElementById("sixteen--btn").addEventListener("click", function () {
  let sixteenArr = [];

  let sixteenArrLenght = Math.trunc(Math.random() * 14) + 1;

  for (let i = 0; i < sixteenArrLenght; i++) {
    sixteenArr[i] = Math.trunc(Math.random() * 15);
  }

  let sixteenAnswer = "Boshlang'ich Massiv: " + sixteenArr;

  sixteenArr.reverse();

  sixteenAnswer += " Sortirovka qilingan: <br>" + sixteenArr;

  document.getElementById("sixteen--answer").innerHTML = sixteenAnswer;

  document.getElementById("sixteen--close").onclick = function () {
    document.getElementById("sixteen--answer").innerHTML = " ";
  };
});

// 17-mashq 2. Berilgan matnni harflarini teskari qilib ko'rsating.
document
  .getElementById("seventeen--btn")
  .addEventListener("click", function () {
    let seventeenText = document.getElementById("seventeen--value").value;

    let seventeenAnswer = "Matn: " + seventeenText + "<br>Natija: <br> ";

    // split("") metodini topkan sayt link
    // u stringni arrayga otkazib berar ekan .reverse() ni ozi ishlamadi.
    // https://dev.to/sanchithasr/6-ways-to-convert-a-string-to-an-array-in-javascript-1cjg

    seventeenAnswer += seventeenText.split("").reverse().join(" ");

    document.getElementById("seventeen--answer").innerHTML = seventeenAnswer;

    document.getElementById("seventeen--close").onclick = function () {
      document.getElementById("seventeen--answer").innerHTML = " ";
    };
  });

// bu masala oxirida sanaganimda qolib ketibdi oxirida bajardim
// revers 3. Sonlar ketma-ketligini teskari tartibda ko‘rsating.

document.getElementById("revers--btn").addEventListener("click", function () {
  let reversAnswer = "Boshlang'ich massiv: ";
  let reversArr = [];

  let reversArrLenght = Math.trunc(Math.random() * 14) + 1;

  for (let i = 0; i < reversArrLenght; i++) {
    reversArr[i] = Math.trunc(Math.random() * 15);
  }

  reversAnswer += reversArr;

  reversArr.reverse();

  reversAnswer += "<br>Teskari tartibdagi Massiv: " + reversArr;

  document.getElementById("revers--answer").innerHTML = reversAnswer;

  document.getElementById("revers--close").onclick = function () {
    document.getElementById("revers--answer").innerHTML = " ";
  };
});

// ###                                 7. ToString
// 18-mashq 1. Massivni matnga aylantiring.
document
  .getElementById("eightteen--btn")
  .addEventListener("click", function () {
    let eightteenArr = [];

    let eightteenArrLenght = Math.trunc(Math.random() * 14) + 1;

    for (let i = 0; i < eightteenArrLenght; i++) {
      if (i % 2 == 0) {
        eightteenArr[i] = "Text";
        continue;
      }
      eightteenArr[i] = Math.trunc(Math.random() * 15);
    }

    let eightteenAnswer =
      "Boshlang'ich Massiv: " + eightteenArr + "<br> String qilingan: <br>";

    let eightteenStr = eightteenArr.toString();

    eightteenAnswer += eightteenStr;
    document.getElementById("eightteen--answer").innerHTML = eightteenAnswer;

    document.getElementById("eightteen--close").onclick = function () {
      document.getElementById("eightteen--answer").innerHTML = " ";
    };
  });

// 19-mashq 2. Massiv elementlarini vergul bilan ajratilgan matn
//  ko'rinishida qaytaring.
document.getElementById("nineteen--btn").addEventListener("click", function () {
  let nineteenArr = [];

  let nineteenArrLenght = Math.trunc(Math.random() * 14) + 1;

  for (let i = 0; i < nineteenArrLenght; i++) {
    if (i % 2 == 0) {
      nineteenArr[i] = "Text";
      continue;
    }
    nineteenArr[i] = Math.trunc(Math.random() * 15);
  }

  let nineteenAnswer =
    "Boshlang'ich Massiv: " + nineteenArr + "<br> String qilingan: <br>";

  nineteenArr = nineteenArr.toString();

  //  alert(typeof twentyAnswer);

  nineteenAnswer += nineteenArr;
  document.getElementById("nineteen--answer").innerHTML = nineteenAnswer;

  document.getElementById("nineteen--close").onclick = function () {
    document.getElementById("nineteen--answer").innerHTML = " ";
  };
});

// 20-mashq 3. Sonlar ketma-ketligini matn ko'rinishida birlashtirib qaytaring.

document.getElementById("twenty--btn").addEventListener("click", function () {
  let twentyAnswer = "";

  let num1 = 5,
    num2 = 4,
    num3 = 13,
    num4 = 53,
    num5 = 344;

  twentyAnswer =
    num1.toString() +
    ", " +
    num2.toString() +
    ", " +
    num3.toString() +
    ", " +
    num4.toString() +
    ", " +
    num5.toString();
  // alert(typeof twentyAnswer);

  document.getElementById("twenty--answer").innerHTML = twentyAnswer;

  document.getElementById("twenty--close").onclick = function () {
    document.getElementById("twenty--answer").innerHTML = " ";
  };
});

//                                                ###  8. Join
// 21-mashq 1. Massiv elementlarini “-” belgisi bilan birlashtirib chiqaring.

// twenty ni qistartirib twt qilib yozib kettim.

document.getElementById("twtone--btn").addEventListener("click", function () {
  let twtoneArr = [];

  let twtoneArrLenght = Math.trunc(Math.random() * 14) + 1;

  for (let i = 0; i < twtoneArrLenght; i++) {
    if (i % 2 == 0) {
      twtoneArr[i] = "string";
      continue;
    }
    twtoneArr[i] = Math.trunc(Math.random() * 15);
  }

  let twtoneAnswer =
    "Boshlang'ich Massiv: <br>" +
    twtoneArr +
    "<br><br> Join(-)  qilingan: <br>";

  let twtoneRes = twtoneArr.join("-");

  twtoneAnswer += twtoneRes;
  document.getElementById("twtone--answer").innerHTML = twtoneAnswer;

  document.getElementById("twtone--close").onclick = function () {
    document.getElementById("twtone--answer").innerHTML = " ";
  };
});

// 22-mashq 2. Massivdagi so'zlarni bo'sh joy bilan birlashtirib, satr ko'rinishida qaytaring.

document.getElementById("twttwo--btn").addEventListener("click", function () {
  let twttwoArr = [];

  let twttwoArrLenght = Math.trunc(Math.random() * 14) + 1;

  for (let i = 0; i < twttwoArrLenght; i++) {
    if (i % 2 == 1) {
      twttwoArr[i] = "string";
      continue;
    }
    twttwoArr[i] = " This ";
  }

  let twttwoAnswer =
    "Boshlang'ich Massiv: <br>" +
    twttwoArr +
    "<br><br> Join( )  qilingan: <br>";

  let twttwoRes = twttwoArr.join(" ");

  twttwoAnswer += twttwoRes;
  document.getElementById("twttwo--answer").innerHTML = twttwoAnswer;

  document.getElementById("twttwo--close").onclick = function () {
    document.getElementById("twttwo--answer").innerHTML = " ";
  };
});

// 23-mashq 3. Massiv elementlarini “|” belgisi bilan birlashtirib, satr hosil qiling.

document.getElementById("twtthree--btn").addEventListener("click", function () {
  let twtthreeArr = [];

  let twtthreeArrLenght = Math.trunc(Math.random() * 14) + 1;

  for (let i = 0; i < twtthreeArrLenght; i++) {
    if (i % 2 == 1) {
      twtthreeArr[i] = "string";
      continue;
    }
    twtthreeArr[i] = " This ";
  }

  let twtthreeAnswer =
    "Boshlang'ich Massiv: <br>" +
    twtthreeArr +
    "<br><br> Join( )  qilingan: <br>";

  let twtthreeRes = twtthreeArr.join("|");

  twtthreeAnswer += twtthreeRes;
  document.getElementById("twtthree--answer").innerHTML = twtthreeAnswer;

  document.getElementById("twtthree--close").onclick = function () {
    document.getElementById("twtthree--answer").innerHTML = " ";
  };
});

// ### 9.                                         Push, Shift

// 24-mashq 1. Massiv oxiriga yangi element qo'shing va natijani ko'rsating.
document.getElementById("twtfour--btn").addEventListener("click", function () {
  let twtfourArr = [];

  let twtfourArrLenght = Math.trunc(Math.random() * 14) + 1;

  for (let i = 0; i < twtfourArrLenght; i++) {
    if (i % 2 == 1) {
      twtfourArr[i] = " string ";
      continue;
    }

    twtfourArr[i] = " This ";
  }

  let twtfourAnswer =
    "Boshlang'ich Massiv: <br>" +
    twtfourArr +
    "<br><br> Yangi element qoshilgan: <br>";

  twtfourArr.push(" Yangi element");

  twtfourAnswer += twtfourArr;

  document.getElementById("twtfour--answer").innerHTML = twtfourAnswer;

  document.getElementById("twtfour--close").onclick = function () {
    document.getElementById("twtfour--answer").innerHTML = " ";
  };
});

// 25-mashq
// 2. Massivdan birinchi elementni o'chirib tashlang va natijani ko'rsating.

document.getElementById("twtfive--btn").addEventListener("click", function () {
  let twtfiveArr = [];

  let twtfiveArrLenght = Math.trunc(Math.random() * 14) + 1;

  for (let i = 0; i < twtfiveArrLenght; i++) {
    if (i % 2 == 1) {
      twtfiveArr[i] = " string ";
      continue;
    }

    twtfiveArr[i] = " This is";
  }

  let twtfiveAnswer =
    "Boshlang'ich Massiv: <br>" +
    twtfiveArr +
    "<br><br> Ozgartirilgan Massiv: <br>";

  twtfiveArr.shift();

  twtfiveAnswer += twtfiveArr;

  document.getElementById("twtfive--answer").innerHTML = twtfiveAnswer;

  document.getElementById("twtfive--close").onclick = function () {
    document.getElementById("twtfive--answer").innerHTML = " ";
  };
});

// 26-mashq
// 3. Berilgan massivga oxiriga bir nechta element qo'shing,
//  va massivdan birinchi elementni olib tashlang.
document.getElementById("twtsix--btn").addEventListener("click", function () {
  let twtsixArr = [];

  let twtsixArrLenght = Math.trunc(Math.random() * 14) + 1;

  for (let i = 0; i < twtsixArrLenght; i++) {
    if (i % 2 == 1) {
      twtsixArr[i] = " string ";
      continue;
    }

    twtsixArr[i] = " This is";
  }

  let twtsixAnswer =
    "Boshlang'ich Massiv: <br>" +
    twtsixArr +
    "<br><br> Ozgartirilgan Massiv: <br>";

  twtsixArr.shift();

  let twtsixNew = Math.trunc(Math.random() * 4) + 1;

  for (let i = 0; i <= twtsixNew; i++) {
    twtsixArr.push(" Yangi element");
  }

  twtsixAnswer += twtsixArr;

  document.getElementById("twtsix--answer").innerHTML = twtsixAnswer;

  document.getElementById("twtsix--close").onclick = function () {
    document.getElementById("twtsix--answer").innerHTML = " ";
  };
});

// ###                                              10. Unshift, Pop
// 27-mashq 1. Massivning boshiga yangi element qo'shing va natijani qaytaring.

document.getElementById("twtseven--btn").addEventListener("click", function () {
  let twtsevenArr = [];

  let twtsevenArrLenght = Math.trunc(Math.random() * 14) + 1;

  for (let i = 0; i < twtsevenArrLenght; i++) {
    if (i % 2 == 1) {
      twtsevenArr[i] = " string ";
      continue;
    }

    twtsevenArr[i] = " This is";
  }

  let twtsevenAnswer =
    "Boshlang'ich Massiv: <br>" +
    twtsevenArr +
    "<br><br> Ozgartirilgan Massiv: <br>";

  twtsevenArr.unshift(" Yangi element ");

  twtsevenAnswer += twtsevenArr;

  document.getElementById("twtseven--answer").innerHTML = twtsevenAnswer;

  document.getElementById("twtseven--close").onclick = function () {
    document.getElementById("twtseven--answer").innerHTML = " ";
  };
});

// 28-mashq 2. Massivning oxirgi elementini o‘chirib tashlang va natijani qaytaring.
document.getElementById("twteight--btn").addEventListener("click", function () {
  let twteightArr = [];

  let twteightArrLenght = Math.trunc(Math.random() * 14) + 1;

  for (let i = 0; i < twteightArrLenght; i++) {
    if (i % 2 == 1) {
      twteightArr[i] = " string ";
      continue;
    }

    twteightArr[i] = " This is";
  }

  let twteightAnswer =
    "Boshlang'ich Massiv: <br>" +
    twteightArr +
    "<br><br> Ozgartirilgan Massiv: <br>";

  twteightArr.pop();

  twteightAnswer += twteightArr;

  document.getElementById("twteight--answer").innerHTML = twteightAnswer;

  document.getElementById("twteight--close").onclick = function () {
    document.getElementById("twteight--answer").innerHTML = " ";
  };
});

// 29-mashq 3. Birinchi va oxirgi elementni qo‘shish va o‘chirish bilan bog'liq operatsiyalarni bajaring.
document.getElementById("twtnine--btn").addEventListener("click", function () {
  let twtnineArr = [];

  let twtnineArrLenght = Math.trunc(Math.random() * 14) + 1;

  for (let i = 0; i < twtnineArrLenght; i++) {
    if (i % 2 == 1) {
      twtnineArr[i] = " string ";
      continue;
    }

    twtnineArr[i] = " This is";
  }

  let twtnineAnswer =
    "Boshlang'ich Massiv: <br>" +
    twtnineArr +
    "<br><br> Ozgartirilgan Massiv: <br>";

  twtnineArr.pop();
  twtnineArr.unshift(" Yangi element ");

  twtnineAnswer += twtnineArr;

  document.getElementById("twtnine--answer").innerHTML = twtnineAnswer;

  document.getElementById("twtnine--close").onclick = function () {
    document.getElementById("twtnine--answer").innerHTML = " ";
  };
});

//                                          Qiyinroq masalalar

// ### Qiyinroq masalalar:

//  1. **Massivning uzunligi**:
//  - Berilgan massivda elementlar soni toq bo'lsa, massivning o'rta elementini olib tashlang. Agar juft bo'lsa, massivni ikkiga bo'ling va har bir qismini alohida qaytaring.

document
  .getElementById("hardFirst--btn")
  .addEventListener("click", function () {
    let hardFirstArr = [];

    let hardFirstArrLenght = Math.trunc(Math.random() * 14) + 1;

    for (let i = 0; i < hardFirstArrLenght; i++) {
      hardFirstArr[i] = Math.trunc(Math.random() * 15);
    }
    let hardFirstAnswer = "Boshlang'ich Massiv: " + hardFirstArr;

    if (hardFirstArr.lenght % 2 == 0) {
      let firstPart = hardFirstArr.slice(0, hardFirstArr.length / 2);

      let secondPart = hardFirstArr.slice(hardFirstArr.length / 2);

      hardFirstAnswer +=
        "<br>Juft, ikkiga bo'linganda <br>" +
        "Birinchi qism: " +
        firstPart +
        "<br>Ikkinchi qism: " +
        secondPart;
    } else {
      let halfIndex = Math.floor(hardFirstArr.length / 2);

      hardFirstArr.splice(halfIndex, 1);

      hardFirstAnswer += "<br> O'zgartirilgan massiv: " + hardFirstArr;
    }

    document.getElementById("hardFirst--answer").innerHTML = hardFirstAnswer;
    document.getElementById("hardFirst--close").onclick = function () {
      document.getElementById("hardFirst--answer").innerHTML = " ";
    };
  });

//  2. **Massivni birlashtirish va filtr qilish**:
//  - Ikki massivni birlashtiring, keyin yangi massivda faqat son
// bo'lgan elementlarni saqlab qoldiring.

document
  .getElementById("hardSecond--btn")
  .addEventListener("click", function () {
    let filterFirst = [];
    let filterSecond = [];

    let filterFirstLenght = Math.trunc(Math.random() * 14) + 1;

    for (let i = 0; i < filterFirstLenght; i++) {
      if (i % 2 == 1) {
        filterFirst[i] = " string ";
        continue;
      }
      filterFirst[i] = " This is ";
    }

    for (let i = 0; i < filterFirstLenght; i++) {
      filterSecond[i] = Math.trunc(Math.random() * 1000);
    }

    filterFirst = filterFirst.concat(filterSecond);

    let hardSecondAnswer =
      "Boshlang'ich Massiv: <br>" +
      filterFirst +
      "<br><br>Yangilangan massiv: <br>";

    let filterNumArr = [];

    for (let i = 0; i < filterFirst.length; i++) {
      if (typeof filterFirst[i] == "number") {
        filterNumArr.push(filterFirst[i]);
      }
    }

    hardSecondAnswer += filterNumArr;

    document.getElementById("hardSecond--answer").innerHTML = hardSecondAnswer;

    document.getElementById("hardSecond--close").onclick = function () {
      document.getElementById("hardSecond--answer").innerHTML = " ";
    };
  });

// 3. **Elementlarni qidirish va qo'shish**:
//  - Massiv ichida qidirilayotgan element mavjud bo'lsa,
//  uni olib tashlang. Agar mavjud bo'lmasa, massiv
//  oxiriga yangi element qo'shing.
document
  .getElementById("hardThird--btn")
  .addEventListener("click", function () {
    let searchElement = document.getElementById("hardThird--value").value;

    let findThird = [];

    let findLenght = Math.trunc(Math.random() * 14) + 1;

    for (let i = 0; i < findLenght; i++) {
      if (i % 2 == 1) {
        findThird[i] = "String";
        continue;
      }

      findThird[i] = Math.trunc(Math.random() * 100);
    }

    let hardThirdAnswer = "Massiv: <br>" + findThird;

    let findIndex = findThird.indexOf(searchElement);

    findIndex > -1
      ? (findThird.splice(findIndex, 1),
        (hardThirdAnswer += "<br> Element topildi"))
      : (findThird.push("Yangi element"),
        (hardThirdAnswer += "<br>Element topilmadi"));

    hardThirdAnswer += "<br>Yangilangan massiv: <br>" + findThird;

    document.getElementById("hardThird--answer").innerHTML = hardThirdAnswer;

    document.getElementById("hardThird--close").onclick = function () {
      document.getElementById("hardThird--answer").innerHTML = " ";
    };
  });

// 4. **Massivdagi elementlarning indekslari**:
//  - Berilgan massivda ma'lum bir elementning birinchi
//  va oxirgi indeksini toping, so'ngra ushbu indekslar
// orasidagi barcha elementlarni yangi massivga oling.
document.getElementById("hardFour--btn").addEventListener("click", function () {
  let searchElementIndex = document.getElementById("hardFour--value").value;

  let findFour = [];
  let fourNewArr = [];

  let findLenght = Math.trunc(Math.random() * 14) + 1;
  for (let i = 0; i < findLenght; i++) {
    if (i % 4 == 1) {
      findFour[i] = "String";

      continue;
    }

    findFour[i] = Math.trunc(Math.random() * 100);
  }

  let hardFourAnswer = "Massiv: <br>" + findFour;

  let findFirstIndex = findFour.indexOf(searchElementIndex);
  let findLastIndex = findFour.lastIndexOf(searchElementIndex);

  if (findFirstIndex > -1) {
    fourNewArr = findFour.slice(findFirstIndex + 1, findLastIndex);

    hardFourAnswer += "<br>Yangilangan massiv: " + fourNewArr;
  } else {
    hardFourAnswer += "<br>Bunday qiymat topilmadi";
  }

  document.getElementById("hardFour--answer").innerHTML = hardFourAnswer;

  document.getElementById("hardFour--close").onclick = function () {
    document.getElementById("hardFour--answer").innerHTML = " ";
  };
});

// 5. **Sonlarni tartiblab, so'zlarni teskari qilish**:
//  - Massivda sonlar va so'zlar aralash bo'lsa,
//  sonlarni o'sish tartibida, so'zlarni teskari tartibda chiqaring.

document.getElementById("hardFive--btn").addEventListener("click", function () {
  // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  // sozlarni random tarzda generatsiya qilish uchun kodni stackoverflowdan oldim
  // sababi raqamlarni qilishni korsatib bergandi satrni esa xali organganimiz yoq edi

  function randString(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  let sortFive = [];
  let fiveNumArr = [];
  let fiveStrArr = [];

  let sortLenght = Math.trunc(Math.random() * 14) + 1;
  for (let i = 0; i < sortLenght; i++) {
    if (i % 3 == 1) {
      sortFive[i] = randString(10);
      continue;
    }

    sortFive[i] = Math.trunc(Math.random() * 100);
  }

  let hardFiveAnswer = "Massiv: <br>" + sortFive;

  for (let i = 0; i < sortFive.length; i++) {
    typeof sortFive[i] == "number"
      ? fiveNumArr.push(sortFive[i])
      : fiveStrArr.push(sortFive[i]);
  }

  fiveNumArr.sort(function (a, b) {
    return a - b;
  });

  fiveStrArr.sort().reverse();

  hardFiveAnswer += "<br>" + fiveNumArr + "<br>" + fiveStrArr;

  document.getElementById("hardFive--answer").innerHTML = hardFiveAnswer;
  document.getElementById("hardFive--close").onclick = function () {
    document.getElementById("hardFive--answer").innerHTML = " ";
  };
});

//  6. **Massivni o'zgartirib matn yaratish**:
// - Massivdagi sonlarni ikkiga ko'paytiring va
//  natijada hosil bo'lgan qiymatlarni bitta matn
// ko'rinishida vergul bilan ajratib ko'rsating.

document.getElementById("hardSix--btn").addEventListener("click", function () {
  let changeSix = [];
  let hardSixAnswer = "Boshlang'ch Massiv: <br>";

  let changeLenght = Math.trunc(Math.random() * 14) + 1;
  for (let i = 0; i < changeLenght; i++) {
    changeSix[i] = Math.trunc(Math.random() * 100);
  }
  hardSixAnswer += changeSix;

  for (let i = 0; i < changeLenght; i++) {
    changeSix[i] *= 2;
  }

  let strArr = changeSix.join(",");

  hardSixAnswer += "<br>Yangilangan massiv: <br>" + strArr;
  document.getElementById("hardSix--answer").innerHTML = hardSixAnswer;

  document.getElementById("hardSix--close").onclick = function () {
    document.getElementById("hardSix--answer").innerHTML = " ";
  };
});

// 7. **Qo'shma matn yaratish**:
//  - Uchta massivni birlashtirib,
// har bir massiv elementini “-“
// belgisi bilan ajratib yangi matn
//  hosil qiling. Matndagi barcha kichik
// harflarni katta harflarga o'zgartiring.

document
  .getElementById("hardSeven--btn")
  .addEventListener("click", function () {
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    // sozlarni random tarzda generatsiya qilish uchun kodni stackoverflowdan oldim
    // sababi raqamlarni qilishni korsatib bergandi satrni esa xali organganimiz yoq edi

    function randString(length) {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYfsdfsdfdsSDfsdfZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
      }
      return result;
    }

    let firstSevenArr = [];
    let secondSevenArr = [];
    let thirdSevenArr = [];

    let hardSevenAnswer = "Massiv:<br>";

    let sortLenght = Math.trunc(Math.random() * 14) + 1;
    for (let i = 0; i < sortLenght; i++) {
      firstSevenArr[i] = randString(10);
      secondSevenArr[i] = randString(8);
      thirdSevenArr[i] = randString(15);
    }

    let hardStr = firstSevenArr.concat(secondSevenArr, thirdSevenArr).join("-");
    // https://stackoverflow.com/questions/2354716/convert-lowercase-letter-to-upper-case-in-javascript
    // kichik harflarni kattaga almashrish uchun kod olgan manzilim
    hardStr = hardStr.toUpperCase();

    hardSevenAnswer = hardStr;
    document.getElementById("hardSeven--answer").innerHTML = hardSevenAnswer;
    document.getElementById("hardSeven--close").onclick = function () {
      document.getElementById("hardSeven--answer").innerHTML = " ";
    };
  });

// 8. **Massivni yangilash va matnga aylantirish**:
//  - Massivdagi elementlarning birinchi va oxirgi
//  bo'lganlarini o'chirib, qolgan elementlarni satr
// sifatida “:” belgisi bilan birlashtirib ko'rsating.

document
  .getElementById("hardEight--btn")
  .addEventListener("click", function () {
    function randString(length) {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
      }
      return result;
    }

    let changeEightArr = [];

    let changeLenght = Math.trunc(Math.random() * 14) + 1;
    for (let i = 0; i < changeLenght; i++) {
      if (i % 3 == 1) {
        changeEightArr[i] = randString(5);
        continue;
      }

      changeEightArr[i] = Math.trunc(Math.random() * 100);
    }

    let hardEightAnswer = "Massiv: <br>" + changeEightArr + "<br>";

    changeEightArr.pop();
    changeEightArr.shift();

    let changeStr = changeEightArr.join(":");

    hardEightAnswer += changeStr;

    document.getElementById("hardEight--answer").innerHTML = hardEightAnswer;
    document.getElementById("hardEight--close").onclick = function () {
      document.getElementById("hardEight--answer").innerHTML = " ";
    };
  });

// 9. **Massivni o'zgartirib element qo'shish**:
//  - Massivning boshiga va oxiriga bittadan yangi
//  element qo'shing, so'ngra massivni tartiblab chiqaring
//  va natijada oxirgi uch elementni oling.

document.getElementById("hardNine--btn").addEventListener("click", function () {
  function randString(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  let changeNineArr = [];

  let changeLenght = Math.trunc(Math.random() * 14) + 1;
  for (let i = 0; i < changeLenght; i++) {
    if (i % 3 == 1) {
      changeNineArr[i] = randString(5);
      continue;
    }

    changeNineArr[i] = Math.trunc(Math.random() * 100);
  }

  let hardNineAnswer =
    "Massiv: <br>" + changeNineArr + "<br>Ozgartirilgan holat: <br>";

  changeNineArr.push("yangi element");
  changeNineArr.unshift("yangi element");

  changeNineArr.sort();

  hardNineAnswer += changeNineArr;
  let nineArrPart = changeNineArr.slice(-3);
  hardNineAnswer += "<br>Oxirgi 3 element: <br>" + nineArrPart;

  document.getElementById("hardNine--answer").innerHTML = hardNineAnswer;
  document.getElementById("hardNine--close").onclick = function () {
    document.getElementById("hardNine--answer").innerHTML = " ";
  };
});

//  10. **Elementlarni aylantirish va tartiblash**:
//  - Massivni teskari qilib chiqing, so'ngra massivni
//  boshidan 2 ta va oxiridan 3 ta elementni o'chiring.
//  Qolgan elementlarni o'sish tartibida joylashtiring.
document.getElementById("hardTen--btn").addEventListener("click", function () {
  function randString(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  let changeTenArr = [];

  let changeLenght = Math.trunc(Math.random() * 9)+7;
  
  for (let i = 0; i < changeLenght; i++) {
    if (i % 3 == 1) {
      changeTenArr[i] = randString(5);
      continue;
    }

    changeTenArr[i] = Math.trunc(Math.random() * 100);
  }

  let hardTenAnswer =
    "Massiv: <br>" + changeTenArr + "<br>Teskari tartibdagi holat: <br>";

  changeTenArr.reverse();

  hardTenAnswer += changeTenArr;

  changeTenArr.splice(0, 2);

  changeTenArr.splice(-3, 3);

  changeTenArr.sort();

  hardTenAnswer +=
    "<br>Ochirilgan va sortirovka qilingan holat: <br>" + changeTenArr;

  document.getElementById("hardTen--answer").innerHTML = hardTenAnswer;
  document.getElementById("hardTen--close").onclick = function () {
    document.getElementById("hardTen--answer").innerHTML = " ";
  };
});
