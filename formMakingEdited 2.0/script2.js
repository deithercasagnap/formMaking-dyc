function formType() {
    let y = document.getElementById("type").value;
   
    if (y === "text") {
        document.getElementById("typeOfText").setAttribute('class', 'form-select mt-2 d-block')
        document.querySelector('#createRadio').setAttribute('class', 'd-flex flex-row mt-2 mb-5 d-none')
        document.querySelector('#createCheckbox').setAttribute('class', 'd-flex flex-row mt-2 mb-5 d-none')
        document.getElementById("label").setAttribute('class', 'form-control mt-2 d-block')
        document.getElementById("label").setAttribute('placeholder', 'Label Your Text Here...')

        document.querySelector('#label').value = ''

    } else if (y == "checkbox") {
        document.querySelector('#createRadio').setAttribute('class', 'd-flex flex-row mt-2 mb-5 d-none')
        document.getElementById("label").setAttribute('class', 'form-control mt-2 d-block')
        document.getElementById("label").setAttribute('placeholder', 'Label Your CheckBox Here...')
        document.getElementById("typeOfText").setAttribute('class', 'form-select mt-2 d-none')

    } else if (y == "button") {
        
        document.getElementById("typeOfText").setAttribute('class', 'form-select mt-2 d-none')
        document.querySelector('#createRadio').setAttribute('class', 'd-flex flex-row mt-2 mb-5 d-none')
        document.querySelector('#createCheckbox').setAttribute('class', 'd-flex flex-row mt-2 mb-5 d-none')
        document.getElementById("label").setAttribute('class', 'form-control mt-2 d-block')
        document.getElementById("label").setAttribute('placeholder', 'Label Your Button Here...')


    }else if (y == "radio") {
        
        document.getElementById("typeOfText").setAttribute('class', 'form-select mt-2 d-none');
        document.querySelector('#createCheckbox').setAttribute('class', 'd-flex flex-row mt-2 mb-5 d-none')
        document.getElementById("label").setAttribute('class', 'form-control mt-2 d-block')
        document.getElementById("label").setAttribute('placeholder', 'Label Your Radio Button Here...')
        document.getElementById("typeOfText").setAttribute('class', 'form-select mt-2 d-none')

    }else if (y == "file"){     
        document.getElementById("label").setAttribute('class', 'form-control mt-2 d-block')
        document.getElementById("label").setAttribute('placeholder', 'Label Your File Here...')
        document.getElementById("typeOfText").setAttribute('class', 'form-select mt-2 d-none')
        document.querySelector('#createCheckbox').setAttribute('class', 'd-flex flex-row mt-2 mb-5 d-none')
        document.querySelector('#createRadio').setAttribute('class', 'd-flex flex-row mt-2 mb-5 d-none')
        document.getElementById("typeOfText").setAttribute('class', 'form-select mt-2 d-none')

    }
    else {     
        document.getElementById("typeOfText").setAttribute('class', 'form-select mt-2 d-none')
        document.querySelector('#createCheckbox').setAttribute('class', 'd-flex flex-row mt-2 mb-5 d-none')
        document.querySelector('#createRadio').setAttribute('class', 'd-flex flex-row mt-2 mb-5 d-none')
        document.getElementById("label").setAttribute('class', 'd-none')
        document.getElementById("typeOfText").setAttribute('class', 'form-select mt-2 d-none')

    }
}

const addItem1 = () => {
    let y = document.getElementById("add-item1").value;
    let el = document.createElement('input')
    let el1 = document.createElement('label')
    let el2 = document.createElement('div')
    
    el.setAttribute('type', 'checkbox')
    el.setAttribute('class', 'form-check-input ms-2')
    el.setAttribute('id', 'additem1')
    el.setAttribute('value', ' ')

    el1.setAttribute('class', 'form-check-label ms-2')
    el1.setAttribute('for', 'additem1')
    el1.textContent = y

    el2.setAttribute('class', 'form-check mt-2')
    el2.append(el, el1)

    document.querySelector('#display').append(el2)


    document.querySelector('#add-item1').value = ''

}

const addItem2 = () => {
    let y = document.getElementById("add-item2").value;
    let el = document.createElement('input')
    let el1 = document.createElement('label')
    let el2 = document.createElement('div')
    
    el.setAttribute('type', 'radio')
    el.setAttribute('class', 'form-check-input ms-2')
    el.setAttribute('id', 'additem2')
    el.setAttribute('value', ' ')

    el1.setAttribute('class', 'form-check-label ms-2')
    el1.setAttribute('for', 'additem2')
    el1.textContent = y

    el2.setAttribute('class', 'form-check mt-2')
    el2.append(el, el1)

    document.querySelector('#display').append(el2)


    document.querySelector('#add-item2').value = ''

}