
const insert = () => {
    let type = document.querySelector('#type').value 
    let label = document.querySelector('#label').value 


    switch(type){
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
        case 'radio': appendRadio(label)
            document.querySelector('#createRadio').setAttribute('class', 'd-flex flex-row mt-2 mb-5 d-block')
            break
        case 'checkbox': appendCheckbox(label)
            document.querySelector('#createCheckbox').setAttribute('class', 'd-flex flex-row mt-2 mb-5 d-block')
            break
        case 'file': appendFile(label)
            break
    }
}

const appendText = (label = "No label") => {

    let y = document.getElementById("typeOfText").value
    let el1 = document.createElement('input')
    let el2 = document.createElement('input')
    
    el1.setAttribute('type', 'text')
    el1.setAttribute('readonly', true)
    el1.setAttribute('class', 'border-0 fw-bold mt-2')
    el1.setAttribute('placeholder', label)

    document.querySelector('#display').append(el1)

    if (y == "text") {
        el2.setAttribute('type', 'text')
        el2.setAttribute('class', 'form-control fst-italic ps-5')
        el2.setAttribute('placeholder', 'Type ' + label + ' here...')
    
        document.querySelector('#display').append(el2)

    } else if  (y == "password") {
        el2.setAttribute('type', 'password') 
        el2.setAttribute('class', 'form-control fst-italic ps-5')
        el2.setAttribute('placeholder', 'Type ' + label + ' here...')
    
        document.querySelector('#display').append(el2)
    } else {

    }
  
    document.querySelector('#label').value = ''
    document.querySelector('#typeOfText').value = ''

}

const appendButton = (label = "No label") => {
    let el = document.createElement('button')

    el.setAttribute('type', 'text')
    el.setAttribute('class', 'btn btn-primary mt-2 fw-bold') 
    el.textContent = label

    document.querySelector('#display').append(el)

    document.querySelector('#label').value = ''
}

const appendRadio = (label = "No label") => {
    let el1 = document.createElement('input')
    
    el1.setAttribute('type', 'text')
    el1.setAttribute('readonly', true)
    el1.setAttribute('class', 'border-0 fw-bold mt-2 ')
    el1.setAttribute('placeholder', label)

    document.querySelector('#display').append(el1)


    document.querySelector('#label').value = ''
}


const appendCheckbox = (label = "No label") => {
    let el1 = document.createElement('input')
    
    el1.setAttribute('type', 'text')
    el1.setAttribute('readonly', true)
    el1.setAttribute('class', 'border-0 fw-bold mt-2 ')
    el1.setAttribute('placeholder', label)

    document.querySelector('#display').append(el1)


    document.querySelector('#label').value = ''
}


const appendFile = (label = "No label") => {
    var fileUpload = document.createElement("input");
    let el1 = document.createElement('input')
    
    el1.setAttribute('type', 'text')
    el1.setAttribute('readonly', true)
    el1.setAttribute('class', 'border-0 fw-bold mt-2 ')
    el1.setAttribute('placeholder', label)

    fileUpload.setAttribute("type", "file");

    document.querySelector('#display').append(el1)
    document.querySelector('#display').append(fileUpload)


    document.querySelector('#label').value = ''
}

const removeLast = () => {

    
    const list = document.getElementById("display");
    
    let type = document.querySelector('#type').value 
    let label = document.querySelector('#label').value 
    let editableButton = document.getElementById("display");
    let numb = document.getElementById("display").children.length;

    numb--;
    if (list.hasChildNodes()) {
        list.removeChild(list.children[numb]);
    }


}

const removeAll = () => {

    const list = document.getElementById("display");

    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }

    document.querySelector('#type').value = ''
    document.querySelector('#label').value = ''
    document.getElementById("typeOfText").setAttribute('class', 'form-select mt-2 d-none')
    document.querySelector('#createCheckbox').setAttribute('class', 'd-flex flex-row mt-2 mb-5 d-none')
    document.querySelector('#createRadio').setAttribute('class', 'd-flex flex-row mt-2 mb-5 d-none')
    document.getElementById("label").setAttribute('class', 'd-none')
    

}