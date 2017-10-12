//http://www.webtutorialsource.com/tutorial/show-hide-toggle-sliding-menu-css-javascript/

function toggle(id) {
    var el = document.getElementById(id);
    var box = el.getAttribute("class");
    if(box == "hide"){
        el.setAttribute("class", "show");
    }
    else{
        el.setAttribute("class", "hide");
    }
}

function delay(elem, src, delayTime){
    window.setTimeout(function() {elem.setAttribute("src", src);}, delayTime);
}
