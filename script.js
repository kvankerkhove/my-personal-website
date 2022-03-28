const github = document.querySelector("#github");
const menu = document.querySelector(".dropbtn")

const noriBtn = document.querySelector("#nori");
const image = document.querySelector("#image");
const description = document.querySelector("#description");
const emoji = document.querySelector("#emoji");
const lines = document.getElementById("lines");
const moreInfo = document.getElementById("more-info");
const randomBtn = document.querySelector("#random")
const factGen = document.querySelector("#fact-gen");

menu.addEventListener('click', function() {
    image.src = "images/me.jpg";
    description.innerHTML = "My Name is Katey VanKerkhove and I'm a Software Engineer Student at Flatiron School."
    emoji.innerHTML = "&#128187;"
    moreInfo.appendChild(lines);
    randomBtn.style.visibility = 'hidden';
})


github.addEventListener('click', function() {
    window.open("https://github.com/kvankerkhove");
    image.src = "images/me.jpg";
    description.innerHTML = "My Name is Katey VanKerkhove and I'm a Software Engineer Student at Flatiron School."
    emoji.innerHTML = "&#128187;"
    moreInfo.appendChild(lines);
    randomBtn.style.visibility = 'hidden';
});


noriBtn.addEventListener('click', function() {
    description.innerHTML = "This is my 2.5 year old Border Collie, Nori!";
    image.src = "images/nori.jpg";
    emoji.innerHTML = "&#127934;";
    lines.remove();
    randomBtn.style.visibility = 'hidden'
});

factGen.addEventListener('click', makeButtonVisible);

function makeButtonVisible() {
    randomBtn.style.visibility = 'visible';
    lines.remove();
    description.innerHTML = "";
    emoji.innerHTML = "&#128302;";
    image.src = "images/tomatoes.jpg";
}

const randomFacts = [
    'In my free time, I like to learn new board games. My favorite is Wingspan.',
    'My zodiac sun sign is Libra.',
    'I am 27 years old.',
    'I grew up in a small suburb outside of Rochester, NY.',
    'Tomatoes are my favorite "vegetable" to grow. They are really fruits!',
    "I'm interested in the crossover between small-scale agriculture and tech.",
    'I enjoy running and yoga.',
    'I like when the weather is overcast',
]

randomBtn.addEventListener('click', randomFactGenerate);

function randomFactGenerate() {
    const randomFact = randomFacts[Math.floor(Math.random() * randomFacts.length)];
    description.innerHTML = randomFact; 
}






