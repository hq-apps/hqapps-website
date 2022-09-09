var wrapper, content, test;
var more = '<div style="height:1000px; background:#EEE;"></div>';

// this is the scroll event handler
function scroller() {
  // print relevant scroll info

  // add more contents if user scrolled down enough
  console.log("scroll!")
  if (document.scrollingElement.scrollTop + document.body.offsetHeight +1 > document.body.offsetHeight) {
    console.log("scroll2!")
    content.innerHTML += more; // NK: Here you can make an Ajax call and fetch content to append to content.innerHTML
  }
}

wrapper = document.scrollingElement
content = document.body

document.addEventListener("scroll", scroller);