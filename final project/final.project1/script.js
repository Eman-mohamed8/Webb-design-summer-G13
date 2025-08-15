let mainImg = document.getElementById("main-img");
let thumbs = document.querySelectorAll(".thumb");
let images = [
    "images/hoodie-1.jpeg",
    "images/hoodie-2.webp",
    "images/hoodie-3.jpg",
    "images/hoodie-4.jpg"
];
let index = 0;

// Change image on thumbnail click
thumbs.forEach(thumb => {
    thumb.addEventListener("click", function () {
        mainImg.src = this.dataset.img;
        thumbs.forEach(t => t.classList.remove("active"));
        this.classList.add("active");
        index = images.indexOf(this.dataset.img);
    });
});

// Auto change image every 3 seconds
setInterval(() => {
    index = (index + 1) % images.length;
    mainImg.src = images[index];
    thumbs.forEach(t => t.classList.remove("active"));
    thumbs[index].classList.add("active");
}, 3000);
