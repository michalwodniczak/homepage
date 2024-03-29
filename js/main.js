{
    const toggleHeaderColor = () => {
        const headerElement = document.querySelector(".js-mainHeader");

        headerElement.classList.toggle("header__mainHeader--secondColor")
    };

    const onDeletePhoto = () => {
        const photo = document.querySelector(".js-photo");

        photo.remove();
    };

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeTextElement = document.querySelector(".js-themeText");

        body.classList.toggle("body--darkTheme");
        themeTextElement.innerText = body.classList.contains("body--darkTheme") ? "Wyłącz" : "Włącz";
    };

    const init = () => {
        const headerButton = document.querySelector(".js-buttonNewBackground");
        const photoButton = document.querySelector(".js-buttonPhotoRemove");
        const themeButtonElement = document.querySelector(".js-buttonChangeTheme");

        headerButton.addEventListener("click", toggleHeaderColor);
        photoButton.addEventListener("click", onDeletePhoto);
        themeButtonElement.addEventListener("click", toggleBackground);
    };
    init();
}