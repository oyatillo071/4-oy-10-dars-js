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
