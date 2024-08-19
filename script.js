const faqItem = document.querySelectorAll(".faq__item");

faqItem.forEach((item) => {
  const question = item.querySelector(".faq__question");
  const reponse = item.querySelector(".faq__answer");
  const icon = item.querySelector("i");

  question.addEventListener("click", () => {
    reponse.style.display =
      reponse.style.display === `block` ? `none` : `block`;

    if (icon.classList.contains("fa-circle-plus")) {
      icon.classList.remove("fa-circle-plus");
      icon.classList.add("fa-circle-minus");
    } else {
      icon.classList.remove("fa-circle-minus");
      icon.classList.add("fa-circle-plus");
    }
  });
});
