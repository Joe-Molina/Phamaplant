
const d = document;

export default function Responsive(){

    let viewportWidth = window.innerWidth;

if (viewportWidth < 700) {
  d.querySelector('.header1').style.display = 'none'
}

if (viewportWidth > 700) {
    d.querySelector('.header').style.display = 'none'
    d.querySelector('.panel-btn').style.visibility = 'hidden'
  }
}