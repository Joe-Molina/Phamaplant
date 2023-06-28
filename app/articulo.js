const d = document; 
$template2 = d.getElementById('componente-card-template').content,
$template3 = d.getElementById('beneficios-card-template').content,
$fragment2 = d.createDocumentFragment(),
$fragment3 = d.createDocumentFragment();


d.addEventListener('click', e =>{

        if(e.target.closest(`.magnesium`)){
            d.querySelector('.medicamnetohidden').dataset.medica = '28'
            d.querySelector('.seccion-container').style.opacity = 1;
            d.querySelector('.seccion-container').style.visibility = "visible"
            medicamentoinfo()
        }

        if(e.target.closest(`.glucosamine`)){
            d.querySelector('.medicamnetohidden').dataset.medica = '29'
            d.querySelector('.seccion-container').style.opacity = 1;
            d.querySelector('.seccion-container').style.visibility = "visible"
            medicamentoinfo()
        }

        if(e.target.closest(`.omega3`)){
            d.querySelector('.medicamnetohidden').dataset.medica = '8'
            d.querySelector('.seccion-container').style.opacity = 1;
            d.querySelector('.seccion-container').style.visibility = "visible"
            medicamentoinfo()
        }

        if(e.target.closest(`.omega369`)){
            d.querySelector('.medicamnetohidden').dataset.medica = '7'
            d.querySelector('.seccion-container').style.opacity = 1;
            d.querySelector('.seccion-container').style.visibility = "visible"
            medicamentoinfo()
        }

        if(e.target.closest(`.colagenovitaminac`)){
            d.querySelector('.medicamnetohidden').dataset.medica = '25'
            d.querySelector('.seccion-container').style.opacity = 1;
            d.querySelector('.seccion-container').style.visibility = "visible"
            medicamentoinfo()
        }

        if(e.target.closest(`.acidohialuronicovitaminac`)){
            d.querySelector('.medicamnetohidden').dataset.medica = '26'
            d.querySelector('.seccion-container').style.opacity = 1;
            d.querySelector('.seccion-container').style.visibility = "visible"
            medicamentoinfo()
        }

        if(e.target.closest(`.centella`)){
            d.querySelector('.medicamnetohidden').dataset.medica = '3'
            d.querySelector('.seccion-container').style.opacity = 1;
            d.querySelector('.seccion-container').style.visibility = "visible"
            medicamentoinfo()
        }

        if(e.target.closest(`.slimplant`)){
            d.querySelector('.medicamnetohidden').dataset.medica = '2'
            d.querySelector('.seccion-container').style.opacity = 1;
            d.querySelector('.seccion-container').style.visibility = "visible"
            medicamentoinfo()
        }

        if(e.target.closest(`.cental`)){
            d.querySelector('.medicamnetohidden').dataset.medica = '1'
            d.querySelector('.seccion-container').style.opacity = 1;
            d.querySelector('.seccion-container').style.visibility = "visible"
            medicamentoinfo()
        }

        if(e.target.closest(`.vinagremanzana`)){
            d.querySelector('.medicamnetohidden').dataset.medica = '27'
            d.querySelector('.seccion-container').style.opacity = 1;
            d.querySelector('.seccion-container').style.visibility = "visible"
            medicamentoinfo()
        }


        
        

    
    if(e.target.closest('.seccion-container .seccion-info .btn')){
        d.querySelector('.seccion-container').style.opacity = 0;
        d.querySelector('.seccion-container').style.visibility = "hidden"
    }
    
})

d.addEventListener('mouseover', e =>{

    for (let i = 1; i < 5; i++) {
        if(e.target.closest(`.componente${i}`)){
            console.log(i)
            d.querySelector(`.componente${i} .componente-img`).style.opacity = 0
            d.querySelector(`.componente${i} .componente-nombre`).style.opacity = 0
            d.querySelector(`.componente${i} .componente-p`).style.display = 'block'
            d.querySelector(`.componente${i} .componente-p`).style.opacity = 1
            d.querySelector(`.componente${i} .componente-p`).style.visibility = 'visible'
            d.querySelector(`.componente${i}`).style.backgroundColor = 'var(--azul)'
        }
        
    }



    
})

d.addEventListener('mouseout', e =>{

    for (let i = 1; i < 5; i++) {
        if(e.target.closest(`.componente${i}`)){
            d.querySelector(`.componente${i} .componente-img`).style.opacity = 1
            d.querySelector(`.componente${i} .componente-nombre`).style.opacity = 1
            d.querySelector(`.componente${i} .componente-p`).style.display = 'none'
            d.querySelector(`.componente${i} .componente-p`).style.opacity = 0
            d.querySelector(`.componente${i} .componente-p`).style.visibility = 'hidden'
            d.querySelector(`.componente${i}`).style.backgroundColor = 'white'
        }
    }
    
})

const medicamentoinfo = async () =>{
    try {
        let selectMedicamento = d.querySelector('.medicamnetohidden').dataset.medica
        
        let res = await axios.get("../../app/medicamentos.json");
        let json = res.data.Medicamento[selectMedicamento - 1];
        
        d.querySelector('.seccion-img img').src = `../../assets/potes/${json.foto}`;
        d.querySelector('.seccion-info .seccion-name').textContent = json.nombre;
        d.querySelector('.seccion-info .seccion-funcion').textContent = json.Funcion;
        d.querySelector('.seccion-info .seccion-descripcion').textContent = json.descripcion;
        d.querySelector('.seccion-info .seccion-indicaciones').textContent = json.indicaciones;
        d.querySelector('.seccion-componentes').innerHTML = "";

        let nComponente = 0
        json.componentes.forEach(el => {
            nComponente++
            console.log(el.foto)
            $template2.querySelector('.componente-div .componente-img').src = `../../assets/componentes/${el.foto}`
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

        d.querySelector('.seccion-componentes').appendChild($fragment2)
        d.querySelector('.seccion-beneficios ul').appendChild($fragment3)
        } catch (err) {
            let message = err.statusText || "Ocurrio un error";
            console.error(message)
            }
}