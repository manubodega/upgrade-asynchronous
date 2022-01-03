window.onload = () => {

    const url = 'https://api.agify.io?name=michael'
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))


  
    const button = document.querySelector('button')
    const input = document.querySelector('input')
    const contenido = document.querySelector('.contenido')
    const baseUrl = `https://api.nationalize.io`;
    const divButtons = document.querySelector('.botones')
    divButtons.style.marginTop = '10px'
    
    

    button.addEventListener('click', obtenerDatos)
    function obtenerDatos(){
        fetch(`${baseUrl}/?name=${input.value}`)
            .then(response => response.json())
            .then(data => mostrarHTML(data))
            .catch(mostrarError)
    }
    
    function mostrarHTML(usuario){
        let html = ''
        let b = document.createElement('button')
        divButtons.appendChild(b)

        const {name, country} = usuario

        b.innerText = `${name}`
        b.className = `${name}`
        b.onclick = function() {borrarDatos(name)};

        html += `<p class=${name} >El nombre ${name} tiene `

        country.forEach(pais => {
            const {country_id, probability} = pais
            return (html += `un ${probability}% de ser de ${country_id} `)  
        });
        html += `</p>`
        // html += `<button class=${name} onclick="${borrarDatos}">${name}</button>`
        return (contenido.innerHTML += html)
    }

    function mostrarError(){
        console.log('Conexión errónea')
    }

    function borrarDatos(name){
        // console.log(name)
        borrar = document.querySelectorAll(`.${name}`)
        for (item of borrar){
            item.remove()
        }
    }
}

