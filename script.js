const github = document.querySelector("#github");

const noriBtn = document.querySelector("#nori");
const image = document.querySelector("#image");
const description = document.querySelector("#description");
const emoji = document.querySelector("#emoji");


github.addEventListener('click', function() {
    window.open("https://github.com/kvankerkhove");
    image.src = "images/me.jpg";
    description.innerHTML = "My Name is Katey VanKerkhove and I'm a Software Engineer Student at Flatiron School."
    emoji.innerHTML = "&#128187;"
});


noriBtn.addEventListener('click', function() {
    description.innerHTML = "This is my 2.5 year old Border Collie, Nori!";
    image.src = "images/nori.jpg";
    emoji.innerHTML = "&#127934;";
});



