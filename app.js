// Choose Mockup and Include
    // 5 functions
    // 3 keyframes
    // 2 toggle functions
    // Design Mockup up to AT LEAST half of the homepage.


const termsContainer = document.querySelector('.termsContainer')
const closeButton = document.querySelector('.close')

const closeTerms = () => {
    termsContainer.classList.toggle('hidden')
}

// if you can find it 
const adContainer = document.querySelector('.adContainer')
const closeAd = () => {
    adContainer.classList.toggle('hidden')
}


// rise steven universe blue guy

const blueGuy = document.querySelector('.steven')

const riseBlueGuy = () => {
    blueGuy.classList.toggle('rise')
}


//flip tv

const tv = document.querySelector('.tv')
const flipTv = () => {
    tv.classList.toggle('flip')
}


// spin logo
const logo = document.querySelector('.logo')

const spinLogo = () => {
    console.log('spinning')
    logo.classList.toggle('spin')
}