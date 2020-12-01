"use strict";

function showSession(element) {
    console.dir(element);
    var modal = document.getElementById("sessionModal")
    modal.style.display = "block";
    modal.onclick = closeSession;
}

function closeSession(event) {
    var classNames = event.target.className;
    if (classNames.includes("session-modal") || classNames.includes("modal-wrap")) {
        var modal = document.getElementById("sessionModal")
        modal.style.display = "none";
    }
}
