{
    let themeButtonElement = document.querySelector(".js-buttonChangeTheme");
    let themeTextElement = document.querySelector(".js-themeText");
    let body = document.querySelector(".body")

    const onChangeHeaderColor = () => {
        const headerButton = document.querySelector(".js-buttonNewBackground");
        const headerElement = document.querySelector(".js-mainHeader");

        headerButton.addEventListener("click", () => {
            headerElement.classList.toggle("header__mainHeader--newColor");
        })
    }

    onChangeHeaderColor();

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