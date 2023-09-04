const slideshow = document.getElementsByClassName("slideshow")[0]

const slideCount = slideshow.children.length

const width = slideshow.offsetWidth

slideNumber = 1;

function scrollSlide() {
    if(slideNumber === slideCount) slideNumber = 0
    slideshow.scroll(width * slideNumber, 0)
    slideNumber++
}

setInterval(scrollSlide, 5000)