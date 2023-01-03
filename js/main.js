{
    let button = document.querySelector(".js-buttonNewBackground");
    let headerElement = document.querySelector(".js-mainHeader");

    let themeButtonElement = document.querySelector(".js-buttonChangeTheme");
    let themeTextElement = document.querySelector(".js-themeText");
    let body = document.querySelector(".body")

    button.addEventListener("click", () => {
        headerElement.classList.toggle("header__mainHeader--newColor");
    })

    const onDeletePhoto = () => {
        const photoButton = document.querySelector(".js-buttonPhotoRemove");
        const photo = document.querySelector(".js-photo");

        photoButton.addEventListener("click", () => {
            photo.remove();
        })
    }

    onDeletePhoto();

    themeButtonElement.addEventListener("click", () => {
        body.classList.toggle("body--newTheme");
        body.classList.contains("body--newTheme") ? themeTextElement.innerText = ("Wyłącz") : themeTextElement.innerText = ("Włącz");
    })
}