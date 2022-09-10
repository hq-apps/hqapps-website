const follower = document.getElementById('cursor');
const element = document.getElementsByClassName("slideshow")[0]

  const mouseX = (event) => {
    return event.clientX;
  };

  const mouseY = (event) => {
    return event.clientY;
  };

  const positionElement = (event) => {
    var mouse;
    mouse = {
      x: mouseX(event),
      y: mouseY(event)
    };
    follower.style.top = mouse.y + 3 + 'px';
    return follower.style.left = mouse.x + 3 + 'px';
  };

  timer = false;

  element.onmousemove = init = (event) => {
    var _event;
    _event = event;
    return timer = setTimeout(() => {
      return positionElement(_event);
    }, 1);
  };
  element.addEventListener("mouseleave", () => {
    follower.style.display = "none"
  })
  element.addEventListener("mouseenter", () => {
    follower.style.display = "block"
  })

follower.addEventListener("click", e => {
    e.preventDefault()
})