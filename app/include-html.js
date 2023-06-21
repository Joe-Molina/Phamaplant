document.addEventListener('DOMContentLoaded', e => {

    const includeHTML = async (el, url) =>{      
        const respuesta = await fetch(url);
        if(respuesta.ok){
            const data = await respuesta.text();
            el.outerHTML = data;
        }
    };

    document.querySelectorAll('[data-include]').forEach((el) => includeHTML(el, el.getAttribute('data-include')));
})