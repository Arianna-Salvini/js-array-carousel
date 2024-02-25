console.log("Hello world");

// Creat arrey for img
const slidesImg = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
//cost/Let
let activeImg = 0

const viewElement = document.querySelector('.slides');
// console.log(viewElement);
// console.log(activeImg);
const next = document.getElementById("next");
const prev = document.getElementById("prev");

// Start for loop
for (let i = 0; i < slidesImg.length -1; i++) {
    const singelImage = slidesImg[i];
    let imgMarkup = `<img class=" ${i === activeImg ? 'active' : ''}" src="./assets/img/${singelImage}" alt="">`;
    // console.log(imgMarkup);
    viewElement.insertAdjacentHTML("beforeend", imgMarkup);
};
// 
// On click Add event listener to button prev and next
//Next//
next.addEventListener('click', function () {
    // console.log('next');
  
    activeImg++
    let maxIndexLenth = (slidesImg.length -1)

    if (activeImg >= maxIndexLenth){
        activeImg = 0;
    }

    const currentImg = document.querySelector('img.active')
    // console.log(currentImg);

    currentImg.classList.remove('active')
    // console.log(currentImg);

    const allImg = document.querySelectorAll(".slides>img")
    allImg[activeImg].classList.add('active')

})
//Prev//
prev.addEventListener('click', function () {
    // console.log('prev');

    activeImg--
    let maxIndexLenth = (slidesImg.length -1)

    if (activeImg < 0) {
        activeImg == maxIndexLenth}

    const currentImg = document.querySelector('img.active')
    // console.log(currentImg);

    currentImg.classList.remove('active')
    // console.log(currentImg);

    const allImg = document.querySelectorAll(".slides>img")
    // console.log(allImg);

    allImg[activeImg].classList.add('active')
})


