"use strict";

function showSession(element) {
    var modal = document.getElementById("sessionModal");
    var sessionElement = getSession(element);
    copyContent(".session-time")
    copyContent(".session-star")
    copyContent(".session-title")
    copyContent(".session-abstract")
    copyContent(".session-presenter")
    copyHref(".session-link")
    modal.style.display = "block";
    modal.onclick = closeSession;

    function getSession(element) {
        if (element.className.includes("session-title")) {
            return element.parentElement;
        } else if (element.className.includes("session-details")) {
            return element.parentElement.parentElement;
        } else {
            return null;
        }
    }

    function copyContent(className) {
        modal.querySelector(className).innerHTML = sessionElement.querySelector(className).innerHTML
    }

    function copyHref(className) {
        modal.querySelector(className + " a").href = sessionElement.querySelector(className + " a").href
    }
}

function closeSession(event) {
    var classNames = event.target.className;
    if (
        classNames.includes("session-modal")
        || classNames.includes("modal-wrap")
        || classNames.includes("session-close")
    ) {
        var modal = document.getElementById("sessionModal");
        modal.style.display = "none";
    }
}
