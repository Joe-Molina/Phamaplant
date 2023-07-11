const d = document,
    $template = d.getElementById('crud-template').content,
    $template2 = d.getElementById('componente-card-template').content,
    $template3 = d.getElementById('beneficios-card-template').content,
    $template4 = d.getElementById('componentes2-card-template').content,
    $fragment = d.createDocumentFragment(),
    $fragment2 = d.createDocumentFragment(),
    $fragment3 = d.createDocumentFragment();
    $fragment4 = d.createDocumentFragment();
    let viewportWidth = window.innerWidth;
    

d.addEventListener('DOMContentLoaded', e =>{
    medicamentos();

})

d.addEventListener('click', e =>{
    medicamento = 0
    d.querySelectorAll('.cards-container article').forEach(el => {
        medicamento++;
        if(e.target.closest(`.medicamento${medicamento}`)){
            d.body.style.overflowX = 'hidden'

            d.querySelector('.medicamnetohidden').dataset.medica = `${medicamento}`

            d.querySelector('.seccion-container').style.opacity = 1;
            d.querySelector('.seccion-container').style.visibility = "visible"

            medicamentoinfo()

        }
        
        
    });
    
    if(e.target.closest('.seccion-container .seccion-info .boton')){
        d.querySelector('.seccion-container').style.opacity = 0;
        d.querySelector('.seccion-container').style.visibility = "hidden"
    }
    
})

d.addEventListener('mouseover', e =>{

    for (let i = 1; i < 5; i++) {
        if(e.target.closest(`.componente${i}`)){
            d.querySelector(`.componente${i} .componente-p`).style.display = 'block'

            
            if (viewportWidth > 700) {
                const seguirCursor = () =>{
                    const sigueAlMouse = document.querySelector(`.componente${i} .componente-p`);
                    sigueAlMouse.style.left = e.pageX - window.scrollX + -435 + 'px';
                    sigueAlMouse.style.top = e.pageY - window.scrollY + -200 + 'px';
                    document.removeEventListener('mousemove', seguirCursor);
                }
                document.addEventListener('mousemove', seguirCursor);
            }

            if (viewportWidth < 700){
                d.querySelector(`.componente${i} .componente-img`).style.display = 'none';
                d.querySelector(`.componente${i} .componente-nombre`).style.display = 'none';
                d.querySelector(`.componente${i} `).style.border = 'none'
                d.querySelector(`.componente${i}`).style.height = 'auto';
                d.querySelector(`.componente${i} .componente-p`).style.borderRadius = '5px'


                d.querySelector('.seccion-info').style.marginTop = '100px'
                //d.querySelector('.seccion-img').style.display = 'none'
                d.querySelector('.seccion-img').style.display = 'none'
            }

        }     
    }
    
})


d.addEventListener('mouseout', e =>{

    for (let i = 1; i < 5; i++) {
        if(e.target.closest(`.componente${i}`)){
            d.querySelector(`.componente${i} .componente-p`).style.display = 'none'
            d.querySelector(`.componente${i} `).style.border = '2px solid var(--azul)'
            d.querySelector(`.componente${i} .componente-img`).style.display = 'block';
            d.querySelector(`.componente${i} .componente-nombre`).style.display = 'block';
            
            d.querySelector('.seccion-img').style.display = 'flex'
            if (viewportWidth < 700){
                d.querySelector('.seccion-info').style.marginTop = '0px'
            }

        }
    }
    
})

const medicamentos = async () =>{
    try {
        let res = await axios.get("../app/medicamentos.json");
        let json = res.data.Medicamento;


        json.forEach(el => {
            $template.querySelector(".name").textContent = el.nombre;
            $template.querySelector(".card-img").setAttribute('src', `${el.foto}`)
            $template.querySelector(".product-card").classList.remove(`medicamento${el.id - 1}`)
            $template.querySelector(".product-card").classList.add(`medicamento${el.id}`)

            let $clone = d.importNode($template, true)
            $fragment.appendChild($clone);
        });
  
        d.querySelector('.cards-container').appendChild($fragment)
        } catch (err) {
            let message = err.statusText || "Ocurrio un error";
            console.error(message)
            }
}

const medicamentoinfo = async () =>{
    try {

        d.querySelector('.loaderr').style.display = 'block'
        let selectMedicamento = d.querySelector('.medicamnetohidden').dataset.medica
        
        let res = await axios.get("../app/medicamentos.json");
        let json = res.data.Medicamento[selectMedicamento - 1];
        
        d.querySelector('.seccion-img img').src = ``;
        d.querySelector('.seccion-img img').src = `${json.foto}`;
        d.querySelector('.seccion-info .seccion-name').textContent = json.nombre;
        d.querySelector('.seccion-info .seccion-funcion').textContent = json.Funcion;
        d.querySelector('.seccion-info .seccion-descripcion').textContent = json.descripcion;
        d.querySelector('.seccion-info .seccion-indicaciones').textContent = json.indicaciones;
        d.querySelector('.seccion-componentes').innerHTML = "";
        d.querySelector('.seccion-beneficios ul').innerHTML = "";
        d.querySelector('.seccion-componentes2 ul').innerHTML = "";

        let nComponente = 0
        json.componentes.forEach(el => {
            nComponente++
            $template2.querySelector('.componente-div .componente-img').src = el.foto
            $template2.querySelector('.componente-div .componente-p').textContent = el.definicion;
            $template2.querySelector('.componente-div .componente-nombre').textContent = el.nombre;
            $template2.querySelector('.componente-div').classList.remove(`componente${nComponente-1}`)
            $template2.querySelector('.componente-div').classList.remove(`componente${nComponente+1}`)
            $template2.querySelector('.componente-div').classList.remove(`componente${nComponente+2}`)
            $template2.querySelector('.componente-div').classList.remove(`componente${nComponente+3}`)
            $template2.querySelector('.componente-div').classList.remove(`componente${nComponente+4}`)
            $template2.querySelector('.componente-div').classList.remove(`componente${nComponente+5}`)
            $template2.querySelector('.componente-div').classList.add(`componente${nComponente}`)

            let $clone = d.importNode($template2, true)
            $fragment2.appendChild($clone);
        });

        json.beneficios.forEach(el =>{
            $template3.querySelector('li').textContent = el

            let $clone = d.importNode($template3, true)
            $fragment3.appendChild($clone);
        })

        json.componentes2.forEach(el =>{
            $template4.querySelector('li').textContent = el

            let $clone = d.importNode($template4, true)
            $fragment4.appendChild($clone);
        })

        d.querySelector('.seccion-componentes').appendChild($fragment2)
        d.querySelector('.seccion-beneficios ul').appendChild($fragment3)
        d.querySelector('.seccion-componentes2 ul').appendChild($fragment4)

        d.querySelector('.loaderr').style.display = 'none'
        } catch (err) {
            let message = err.statusText || "Ocurrio un error";
            console.error(message)
            }
}




    