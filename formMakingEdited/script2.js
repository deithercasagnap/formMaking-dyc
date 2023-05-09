function formType() {
    let y = document.getElementById("type").value;
   
        if (y === "text") {
            document.getElementById("typeOfText").setAttribute('class', 'form-select mt-2 d-block')
            document.getElementById("label").setAttribute('class', 'form-control mt-2 d-block')
            document.getElementById("label").setAttribute('placeholder', 'Label Your Text Here...')

            document.querySelector('#label').value = ''

        } else if (y == "checkbox") {
            document.getElementById("label").setAttribute('class', 'form-control mt-2 d-block')
            document.getElementById("label").setAttribute('placeholder', 'Label Your CheckBox Here...')
            document.getElementById("typeOfText").setAttribute('class', 'form-select mt-2 d-none')

        } else if (y == "button") {
            
            document.getElementById("typeOfText").setAttribute('class', 'form-select mt-2 d-none');
            document.getElementById("label").setAttribute('class', 'form-control mt-2 d-block')
            document.getElementById("label").setAttribute('placeholder', 'Label Your Button Here...')

            document.getElementById("typeOfText").setAttribute('class', 'form-select mt-2 d-none')

        }else if (y == "radio") {
            
            document.getElementById("typeOfText").setAttribute('class', 'form-select mt-2 d-none');
            document.getElementById("label").setAttribute('class', 'form-control mt-2 d-block')
            document.getElementById("label").setAttribute('placeholder', 'Label Your Radio Button Here...')
            document.getElementById("typeOfText").setAttribute('class', 'form-select mt-2 d-none')

        }
        else {     
            document.getElementById("typeOfText").setAttribute('class', 'form-select mt-2 d-none')
            document.getElementById("label").setAttribute('class', 'd-none')
            document.getElementById("typeOfText").setAttribute('class', 'form-select mt-2 d-none')

        }
}


const addItem = () => {
    let item = document.getElementById("add-item").value
    let el1 = document.createElement('input')


    el1.setAttribute('type', 'checkbox')
    el1.setAttribute('class', 'justify-content-start mt-1')
    el1.setAttribute('value', item)

    document.querySelector('#checkboxList').appendChild(el1)


    document.querySelector('#add-item').value = ''

}

