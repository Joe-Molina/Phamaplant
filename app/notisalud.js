const d = document;

d.addEventListener('mouseover', e =>{

    for (let i = 1; i < 7; i++) {
        if(e.target.closest(`.articulo${i}`)){
            d.querySelector(`.articulo${i} .oscurecer`).style.backgroundColor = '#00000095'
        }
    }
})

d.addEventListener('mouseout', e =>{
    for (let i = 1; i < 7; i++) {
        if(e.target.closest(`.articulo${i}`)){
            d.querySelector(`.articulo${i} .oscurecer`).style.backgroundColor = '#00000050'
        }
    }
})