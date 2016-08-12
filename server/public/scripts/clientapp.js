$(document).ready(function() {
    loadPage();
});

function postPersonAdam() {

    $.ajax({
        type: "POST",
        url: "/likes/adam",
        success: function(response) {
            resetPage();
            getPersonAdam();
            getPersonCorey();
            getPersonJackie();
            getPersonLiz();
        }
    });
}

function postPersonCorey() {

    $.ajax({
        type: "POST",
        url: "/likes/corey",
        success: function(response) {
            resetPage();
            getPersonAdam();
            getPersonCorey();
            getPersonJackie();
            getPersonLiz();
        }
    });
}

function postPersonJackie() {

    $.ajax({
        type: "POST",
        url: "/likes/jackie",
        success: function(response) {
            resetPage();
            getPersonAdam();
            getPersonCorey();
            getPersonJackie();
            getPersonLiz();
        }
    });
}

function postPersonLiz() {

    $.ajax({
        type: "POST",
        url: "/likes/liz",
        success: function(response) {
            resetPage();
            getPersonAdam();
            getPersonCorey();
            getPersonJackie();
            getPersonLiz();
        }
    });
}


function getPersonAdam() {
    $.ajax({
        type: "GET",
        url: "/bios/adam",
        success: function(response) {
            appendDom(response);
        }
    });
}

function getPersonCorey() {
    $.ajax({
        type: "GET",
        url: "/bios/corey",
        success: function(response) {
            appendDom(response);
        }
    });
}

function getPersonJackie() {
    $.ajax({
        type: "GET",
        url: "/bios/jackie",
        success: function(response) {
            appendDom(response);
        }
    });
}

function getPersonLiz() {
    $.ajax({
        type: "GET",
        url: "/bios/liz",
        success: function(response) {
            appendDom(response);
        }
    });
}

function appendDom(person) {
    $('.container').append(
        '<div class = "person"><img src = "' + person.img + '.jpg"/><p>' +
        person.name + '<button class = "like" id = "' + person.name.toLowerCase() +
        'Button">Me Like-y</button><span>' + person.likesCount + '</span></p><p class="biography">' +
        person.bio + '</div>');
}

function loadPage() {
    getPersonAdam();
    getPersonCorey();
    getPersonJackie();
    getPersonLiz();
    $(".container").on("click", "#adamButton", postPersonAdam);
    $(".container").on("click", "#coreyButton", postPersonCorey);
    $(".container").on("click", "#jackieButton", postPersonJackie);
    $(".container").on("click", "#lizButton", postPersonLiz);
}

function resetPage() {
    $(".container").children().remove();
}
