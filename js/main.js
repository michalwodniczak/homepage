{
    const toggleHeaderColor = () => {
        const headerElement = document.querySelector(".js-mainHeader");

        headerElement.classList.toggle("header__mainHeader--newColor")
    }

    const onDeletePhoto = () => {
        const photo = document.querySelector(".js-photo");

        photo.remove();
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body")
        const themeTextElement = document.querySelector(".js-themeText")

        body.classList.toggle("body--newTheme")
        body.classList.contains("body--newTheme") ? themeTextElement.innerText = ("Wyłącz") : themeTextElement.innerText = ("Włącz");
    }

    const init = () => {
        const headerButton = document.querySelector(".js-buttonNewBackground");
        const photoButton = document.querySelector(".js-buttonPhotoRemove");
        const themeButtonElement = document.querySelector(".js-buttonChangeTheme");

        headerButton.addEventListener("click", toggleHeaderColor);
        photoButton.addEventListener("click", onDeletePhoto)
        themeButtonElement.addEventListener("click", toggleBackground);

    }

    init();
}