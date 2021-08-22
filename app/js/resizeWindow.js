function reformFooter() {
    let bigfooter = `
    <div class="w-page__footer-wrap-item">2021</div>
    <div class="w-page__footer-wrap-item">Разработано onepix</div>
    <div class="w-page__footer-wrap-item">Все права защищены</div>
    `;
    let smallfooter = `
        <div class="newDiv">
            <div class="newDiv__wrap">
                <div class="newDiv__wrap-item">Все права защищены</div>
                <div class="newDiv__wrap-item">2021</div>
            </div>
            <div class="newDiv__wrap"><div class="newDiv__wrap-item" id="center" style="color: #BCBCBC">Разработано onepix</div></div>
        </div>    
    `;
    let footer = document.getElementsByClassName("w-page__footer-wrap");
    let wfooter = document.documentElement.clientWidth;
    footer[0].style.width = wfooter + "px";
    let html = wfooter >= 600 ? bigfooter : smallfooter;
    document.querySelector(".w-page__footer-wrap").innerHTML = html;
}

function setSize() {
    ["onload", "onresize"].forEach(el => window[el] = function () {
        document.getElementsByClassName("w-page")[0].style.width = document.documentElement.clientWidth + "px";
        document.getElementsByClassName("w-page")[0].style.height = document.documentElement.clientHeight - 1 + "px";
        document.getElementsByClassName("w-page")[1].style.width = document.documentElement.clientWidth + "px";
        document.getElementsByClassName("w-page")[1].style.height = document.documentElement.clientHeight + "px";
        reformFooter();
    })
};

setSize();

