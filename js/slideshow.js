const slideshow = {
    images: [
        { title: 'ipad', caption: 'ipad', file: 'assets/ipad-frontimg.jpg' },
        { title: 'iphone13', caption: 'iphone', file: 'assets/airpodpro2-frontimg.jpg' },
        { title: 'airpodspro', caption: 'airpods', file: 'assets/iphone-13-frontimg.jpeg' }
    ]
}

function previousImage() {
    if (slideshow.index === 0) {
        slideshow.index = slideshow.length + 1;
    } else {
        slideshow.index = slideshow.index - 1
    }
}

function insertDots({
    const container = document.querySelector('.slideshow-dots')

    slideshow.images.forEach(image => {
    const button = document.createElement('button')

    button.ariaLabel = 'go to image ${index+1}'

    container.appendChild(button)
})
})

insertDots()