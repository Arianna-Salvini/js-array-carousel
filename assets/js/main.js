console.log("Hello world");

// Creat arrey for img
const slidesImg = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
// console.log(slidesImg);

//cost/Let
let activeImg = 0
const viewElement = document.querySelector('.slides');
// console.log(viewElement);
// console.log(activeImg);
const next = document.getElementById("next");
const prev = document.getElementById("prev");

// Start for loop

for (let i = 0; i < slidesImg.length; i++) {
    const singelImage = slidesImg[i];
    let imgMarkup = `<img class=" ${i === activeImg ? 'active' : ''}" src="./assets/img/${singelImage}" alt="">`;
    // console.log(imgMarkup);
    viewElement.insertAdjacentHTML("beforeend", imgMarkup);

};

// On click Add event listener to button prev and next
// console.log(next, prev);

next.addEventListener('click', function(){
    // console.log('next');

    activeImg++
    const currentImg = document.querySelector('img.active')
    // console.log(currentImg);

    currentImg.classList.remove('active')
    // console.log(currentImg);

    const allImg = document.querySelectorAll(".slides img")
    // console.log(allImg);
 
    allImg[activeImg].classList.add('active')
 

})

prev.addEventListener('click', function(){
    // console.log('prev');

    activeImg--
    const currentImg = document.querySelector('img.active')
    // console.log(currentImg);

    currentImg.classList.remove('active')
    // console.log(currentImg);

    const allImg = document.querySelectorAll(".slides img")
    // console.log(allImg);
 
    allImg[activeImg].classList.add('active')
})


