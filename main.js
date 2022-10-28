window.onload = function () {
  setTimeout(() => {
    let p = document.querySelector("p");
    p.classList.toggle("animate__fadeIn");
    p.innerHTML = "Перенаправляю на мою сторінку в LinkedIn...";
    setTimeout(() => {
      window.location.replace("https://www.linkedin.com/in/yevdokymenko/");
    }, 2000);
  }, 3000);
};
