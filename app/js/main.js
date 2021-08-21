function toScroll(href) {
    const links = document.querySelectorAll(`a[href*="${href}"]`);
    const pages = document.getElementsByClassName(`w-page`);
    for (let link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            pages[1].hidden = false;
            let blockID = link.getAttribute('href').substr(String(href).length);
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setTimeout(function () {
                if ((link.id == "close") && (link.className == "w-page__header-menu")) {
                    pages[1].hidden = true;
                    pages[0].hidden = false;
                };
            }, 400);
        })
    }
}

document.getElementById('id').hidden = true;
toScroll("#");