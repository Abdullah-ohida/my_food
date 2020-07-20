const submitBtn = document.getElementById('submit')
const overlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const text = document.getElementById('text');
// const lastText = document.getElementById("text-last");
// const form = document.getElementById('form');
const reload = document.querySelector('#btn');
const redirect = document.querySelector('.redirect');

    submitBtn.addEventListener('click', function(){
        overlay.classList.add("open-modal");
    });

closeBtn.addEventListener('click', function(){
    overlay.classList.remove("open-modal");
});

reload.addEventListener("click", function(){
    window.location.replace("login.html");
});

redirect.addEventListener("click", function(){
    window.location.replace("index.html");
});




