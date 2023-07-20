function lotteryButton() {
  let num = [];
  let removed = [];
  let end = 45;
  for (let i = 0; i < end; ++i) {
    num.push(i + 1);
  }
  for (let i = 0; i < 6; ++i) {
    const randomNum = Math.floor(Math.random() * (45 - i) + 1);
    removed.push(Number(num.splice(randomNum - 1, 1)));
  }
  removed.sort((a, b) => a - b);
  let lottery1 = $("#lottery1");
  let lottery2 = $("#lottery2");
  lottery1[0].innerHTML = `<p>${removed[0]}</p>  <p>${removed[1]}</p>  <p>${removed[2]}</p>`;
  lottery2[0].innerHTML = `<p>${removed[3]}</p>  <p>${removed[4]}</p>  <p>${removed[5]}</p>`;
  // $(lottery1).children().css("border", "solid");
  // $(lottery2).children().css("border", "solid");
  // $(lottery1).children().css("border-radius", "50%");
  // $(lottery2).children().css("border-radius", "50%");

  $(lottery1).addClass("antimate__animated animate__heartBeat");
  $(lottery2).addClass("antimate__animated animate__heartBeat");

  setTimeout(() => {
    lottery1.removeClass("antimate__animated animate__heartBeat");
    lottery2.removeClass("antimate__animated animate__heartBeat");
  }, 700);
}
