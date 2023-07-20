// 상단 이동 버튼
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});
