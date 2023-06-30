const d = document;

const $ = (selector) => d.querySelector(selector);

let contador = 1

d.addEventListener('DOMContentLoaded', e =>{
    contenido()
})

d.addEventListener('click', e =>{
    
    if(e.target.closest('.prev')){
        contador--
        contenido()
    }

    if(e.target.closest('.next')){
        contador++
        contenido()
    }

})

const contenido = () =>{
    if(contador < 1){
        contador = 3
    }

    if(contador > 3){
        contador = 1
    }

    console.log(contador)

    if(contador === 1){
        $('.banne').style.backgroundImage = 'url("http://drive.google.com/uc?export=view&id=1u5tgv1FKaG0e5G5lElT35Wesb4haK1Y7")'
        $('.aboutUs-info h2').textContent = 'RESEÑA HISTORICA'
        $('.aboutUs-info p').textContent = 'Cada historia tiene su propio punto de partida y es así como queremos contar la historia de nuestra empresa. Pharmaplant es una empresa familiar creada en 1998 en la ciudad de Maracay, la cual, viendo el creciente mercado de los productos naturales del momento, aprovecha el impulso del mercado y la necesidad de introducir nuevos productos naturales con materias primas importadas de alta calidad; con esto, innovo en el mercado nacional, poniendo a la disposición del mercado naturista, suplementos herbarios y naturales con altos estándares de calidad. '
    }

    if(contador === 2){
        $('.banne').style.backgroundImage = 'url("http://drive.google.com/uc?export=view&id=1olau9DnfewyQuuVQSzq0MsLwRjUXSbqC")'
        $('.aboutUs-info h2').textContent = 'MISION'
        $('.aboutUs-info p').textContent = 'Ofrecer productos de calidad, innovando en el mercado nacional de acuerdo a las tendencias y exigencias de nuestros clientes, a fin, de satisfacer calidad, demanda y servicio. Todo esto bajo un ambiente cómodo y una relación GANAR-GANAR con nuestros socios comerciales.'
    }

    if(contador === 3){
        $('.banne').style.backgroundImage = 'url("http://drive.google.com/uc?export=view&id=1MN3YYh7hPW4wsLbKkwMSPr4nPwdS3Pp8")'
        $('.aboutUs-info h2').textContent = 'VISIÓN'
        $('.aboutUs-info p').textContent = 'Nuestra visión a futuro, es llegar a tener independencia total en cuanto a manufactura y creación de nuestros productos, con el objetivo de garantizar, calidad y servicio, a nuestros clientes y la satisfacción en relación beneficio y oferta con el consumidor final, así como también ser ejemplo de buen trabajo.'
    }
}
