{
    let button = document.querySelector(".js-buttonNewBackground");
    let header = document.querySelector(".js-mainHeader");
    let photoButton = document.querySelector(".js-buttonPhotoRemove");
    let photo = document.querySelector(".js-photo");
    let themeButtonElement = document.querySelector(".js-buttonChangeTheme");
    let themeTextElement = document.querySelector(".js-themeText");
    let body = document.querySelector(".body")

    button.addEventListener("click", () => {
        header.classList.toggle("header__mainHeader--newColor");
    })

    photoButton.addEventListener("click", () => {
        photo.remove();
    })

    themeButton.addEventListener("click", () => {
        body.classList.toggle("body--newTheme");
        body.classList.contains("body--newTheme") ? themeTextElement.innerText = ("Wyłącz") : themeTextElement.innerText = ("Włącz");
    })
}