function setSize() {
    ["onload", "onresize"].forEach(el => window[el] = function () {
        document.getElementsByClassName("w-page")[0].style.width = document.documentElement.clientWidth + "px";
        document.getElementsByClassName("w-page")[0].style.height = document.documentElement.clientHeight - 1 + "px";
        document.getElementsByClassName("w-page")[1].style.width = document.documentElement.clientWidth + "px";
        document.getElementsByClassName("w-page")[1].style.height = document.documentElement.clientHeight + "px";
    })
};

setSize();

