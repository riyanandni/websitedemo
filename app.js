const images = [...document.querySelectorAll('.image')];

// popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0; // will track our current image;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})

const updateImage = (i) => {
    let path = `img/img${i+1}.jpg`;
    largeImage.src = path;
    imageName.innerHTML = path;
    imageIndex.innerHTML = `0${i+1}`;
    index = i;
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
    if(index > 0){
        updateImage(index - 1);
    }
})

rightArrow.addEventListener('click', () => {
    if(index < images.length - 1){
        updateImage(index + 1);
    }
})



// var swiper = new Swiper(".clients-slider", {
//     loop:true, 
//     grabCursor:true,
//     spaceBetween: 20,
//     breakpoints: {
//         0: {
//           slidesPerView: 1,
//         },
//         640: {
//           slidesPerView: 2,
//         },
//         768: {
//           slidesPerView: 3,
//         },
//         1024: {
//           slidesPerView: 4,
//         },
//     },
// });


const menu = document.querySelectorAll('.menu li')
// const red = document.querySelector('.red')
// const blue = document.querySelector('.blue')
// const green = document.querySelector('.green')


const pickColor = (e) => {
    const origin = e.target;

   const b = new Splide('#b', {
                perPage: 3,
                perMove: 1,
            })
   const c = new Splide('#c', {
                perPage: 3,
                perMove: 1,
            })
    if (origin.dataset.colorName === "red") {
        red.classList.remove('is-hidden');
        blue.classList.add('is-hidden');
        green.classList.add('is-hidden');
      
    } else if (origin.dataset.colorName === "blue") {
        red.classList.add('is-hidden');
        blue.classList.remove('is-hidden');
        green.classList.add('is-hidden');
        b.mount();
    } else if (origin.dataset.colorName === "green") {
        red.classList.add('is-hidden');
        blue.classList.add('is-hidden');
        green.classList.remove('is-hidden');
      c.mount();
    }



}
