const colors = [
  "Aqua",
  "Black",
  "Blue",
  "Fuchsia",
  "Gray",
  "Green",
  "Lime",
  "Maroon",
  "Navy",
  "Olive",
  "Purple",
  "Red",
  "Silver",
  "Teal",
  "White",
  "Yellow",
  "Orange",
  "Aliceblue",
  "Antiquewhite",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Blanchedalmond",
  "Blueviolet",
  "Brown",
  "Burlywood",
  "Cadetblue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "Cornflowerblue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "Darkblue",
  "Darkcyan",
  "Darkgoldenrod",
  "Darkgray",
  "Darkgreen",
  "Darkkhaki",
  "Darkmagenta",
  "Darkolivegreen",
  "Darkorange",
  "Darkorchid",
  "Darkred",
  "Darksalmon",
  "Darkseagreen",
  "Darkslateblue",
  "Darkslategray",
  "Darkturquoise",
  "Darkviolet",
  "Deeppink",
  "Deepskyblue",
  "Dimgray",
  "Dodgerblue",
  "Firebrick",
  "Floralwhite",
  "Forestgreen",
  "Gainsboro",
  "Ghostwhite",
  "Gold",
  "Goldenrod",
  "Greenyellow",
  "Honeydew",
  "Hotpink",
  "Indianred",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "Lavenderblush",
  "Lawngreen",
  "Lemonchiffon",
  "Lightblue",
  "Lightcoral",
  "Lightcyan",
  "Lightgoldenrodyellow",
  "Lightgray",
  "Lightgreen",
  "Lightpink",
  "Lightsalmon",
  "Lightseagreen",
  "Lightskyblue",
  "Lightslategray",
  "Lightsteelblue",
  "Lightyellow",
  "Limegreen",
  "Linen",
  "Magenta",
  "Mediumaquamarine",
  "Mediumblue",
  "Mediumorchid",
  "Mediumpurple",
  "Mediumseagreen",
  "Mediumslateblue",
  "Mediumspringgreen",
  "Mediumturquoise",
  "Mediumvioletred",
  "Midnightblue",
  "Mintcream",
  "Mistyrose",
  "Moccasin",
  "Navajowhite",
  "Oldlace",
  "Olivedrab",
  "Orangered",
  "Orchid",
  "Palegoldenrod",
  "Palegreen",
  "Paleturquoise",
  "Palevioletred",
  "Papayawhip",
  "Peachpuff",
  "Peru",
  "Pink",
  "Plum",
  "Powderblue",
  "Rosybrown",
  "Royalblue",
  "Saddlebrown",
  "Salmon",
  "Sandybrown",
  "Seagreen",
  "Seashell",
  "Sienna",
  "Skyblue",
  "Slateblue",
  "Slategray",
  "Snow",
  "Springgreen",
  "Steelblue",
  "Tan",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "Whitesmoke",
  "Yellowgreen",
];

// 입력된 텍스트로부터 색상 코드를 추출하는 함수를 정의합니다.
function extractColorCode(colorText) {
  const tempDiv = document.createElement("div");
  tempDiv.style.color = colorText;
  document.body.appendChild(tempDiv);
  const computedColor = window.getComputedStyle(tempDiv).color;
  document.body.removeChild(tempDiv);

  const regex = /\d+/g;
  const numbers = computedColor.match(regex);

  const yiq = (numbers[0] * 299 + numbers[1] * 587 + numbers[2] * 114) / 1000;

  return yiq >= 128 ? "black" : "white";
}

function colorButton() {
  let selectedColor = $("#selectedColor");
  const randomNum = Math.floor(Math.random() * 140 + 1);
  selectedColor[0].innerText = colors[randomNum - 1];
  $(selectedColor).css("color", `${colors[randomNum - 1]}`);

  const brightness = extractColorCode(`${colors[randomNum - 1]}`);
  if (brightness == "white") {
    // 밝은 배경
    $(selectedColor).css("background-color", "white"); // 검은색 텍스트 (RGB: 0, 0, 0)
  } else {
    // 어두운 배경
    $(selectedColor).css("background-color", "black"); // 흰색 텍스트 (RGB: 255, 255, 255)
  }
  $(selectedColor).addClass("animate__animated animate__flipInY");
  setTimeout(() => {
    selectedColor.removeClass("animate__animated animate__flipInY");
  }, 500);
}
