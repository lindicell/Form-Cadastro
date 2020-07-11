const validateEmail = () => {
    const email = document.getElementById("email");
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = regex.test(email.value)
    const invalidEmail = document.getElementById('invalid-email')
    if (!valid) {
        invalidEmail.classList.remove("invalid");
    }
    if (valid) {
        invalidEmail.classList.add("invalid");
    }
};

const getCepInfo = () => {
    const cep = document.getElementById("cep");
    const invalidCep = document.getElementById('invalid-cep')
    fetch(`https://api.postmon.com.br/v1/cep/${cep.value}`)
        .then(element => element.json())
        .then(result => {
            if (result) {
                invalidCep.classList.add("invalid");
                fillAddressInfo(result)
            }
        }).catch(error => {
            console.log(error)
            if (error) {
                invalidCep.classList.remove("invalid");
            }
        });
};

const fillAddressInfo = (info) => {
    const street = document.getElementById('street')
    const city = document.getElementById('city')
    const state = document.getElementById('state')
    const neighborhood = document.getElementById('neighborhood')

    street.value = info.logradouro
    city.value = info.cidade
    state.value = info.estado
    neighborhood.value = info.bairro

}
