const insert = () => {
    let type = document.querySelector('#type').value 
    let label = document.querySelector('#label').value 


    switch(type){
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
        case 'radio': appendRadio(label)
            break
        case 'checkbox': appendCheckbox(label)
            break
    }
}

const appendText = (label = "No label") => {

    let y = document.getElementById("typeOfText").value
    let el1 = document.createElement('input')
    let el2 = document.createElement('input')
    
    el1.setAttribute('type', 'text')
    el1.setAttribute('readonly', true)
    el1.setAttribute('class', 'border-0 fw-bold mt-2 ')
    el1.setAttribute('placeholder', label)


    if (y == "text") {
        el2.setAttribute('type', 'text');
    } else {
        el2.setAttribute('type', 'password')

    }
    
    el2.setAttribute('class', 'form-control fst-italic')
    el2.setAttribute('placeholder', 'Type ' + label + ' here...')


    document.querySelector('#display').append(el1)
    document.querySelector('#display').append(el2)



    document.querySelector('#type').value = ''
    document.querySelector('#label').value = ''
    document.getElementById("typeOfText").setAttribute('class', 'form-select mt-2 d-none')

}

const appendButton = (label = "No label") => {
    let el = document.createElement('button')

    el.setAttribute('type', 'text')
    el.setAttribute('class', 'btn btn-primary mt-2') 
    el.textContent = label

    document.querySelector('#display').append(el)
}

const appendRadio = (label = "No label") => {
    let el = document.createElement('button')

    el.setAttribute('type', 'text')
    el.setAttribute('class', 'btn btn-success mt-2') 
    el.textContent = label

    document.querySelector('#display').append(el)
}


const appendCheckbox = (label = "No label") => {

    let el1 = document.createElement('input')
    

    el1.setAttribute('type', 'text')
    el1.setAttribute('class', 'border border-warning justify-content-start mt-1')
    el1.innerText = label

    document.querySelector('#display').append(el1)
}

const removeTags = () => {

 
    const list = document.getElementById("display");

    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }


}