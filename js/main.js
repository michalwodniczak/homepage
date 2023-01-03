{
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

    const onChangeThemeButtonText = (body) =>{
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

    onChangeThemeBody();
}