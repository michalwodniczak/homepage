{
    const toggleHeaderColor = () => {
        const headerElement = document.querySelector(".js-mainHeader");

        headerElement.classList.toggle("header__mainHeader--newColor")
    }

    const onDeletePhoto = () => {
        const photoButton = document.querySelector(".js-buttonPhotoRemove");
        const photo = document.querySelector(".js-photo");

        photoButton.addEventListener("click", () => {
            photo.remove();
        })
    }

    const onChangeThemeButtonText = (body) => {
        const themeTextElement = document.querySelector(".js-themeText");
        body.classList.contains("body--newTheme") ? themeTextElement.innerText = ("Wyłącz") : themeTextElement.innerText = ("Włącz");
    }

    const onChangeThemeBody = () => {
        const themeButtonElement = document.querySelector(".js-buttonChangeTheme");
        const body = document.querySelector(".body")
        themeButtonElement.addEventListener("click", () => {
            body.classList.toggle("body--newTheme");
            onChangeThemeButtonText(body)
        })
    }

    const init = () => {
        const headerButton = document.querySelector(".js-buttonNewBackground");
        headerButton.addEventListener("click", toggleHeaderColor);
        onDeletePhoto();
        onChangeThemeBody();
    }

    init();
}