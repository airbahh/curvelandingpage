window.onload = function () {

    var email = document.getElementById('emailInput');
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let button = document.getElementById('validate')
    let msg = document.getElementById('msg')

    button.addEventListener('click', function (event) {
        if (pattern.test(email.value)) {
            msg.innerHTML =
                '<p class="msg-true">thanks for subscribe</p>'



        } else {
            msg.innerHTML =
                '<p class="msg-false">check your email please</p>'


        }
        event.preventDefault()
    })


}