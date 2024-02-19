const errors = [0, 0, 0, 0, 0, 0, 0];
const form = document.querySelector("form");

function validName(inputName) {
    let named = /[A-Z, a-z]{2}/g;
    let testName = named.test(inputName.value);
    let message = document.querySelector(".message1");
    if (testName) {
        message.innerText = "Nom valide";
        errors.splice(0, 1, 1);
        document.querySelector("#name").removeAttribute("class");
    } else {
        message.innerText = "Nom invalide";
        errors.splice(0, 1, 0);
    }
}

function validFirstName(inputName) {
    let named = /[A-Z, a-z]{2}/g;
    let testName = named.test(inputName.value);
    let message = document.querySelector(".message2");
    if (testName) {
        message.innerText = "Prénom valide";
        errors.splice(1, 1, 1);
        document.querySelector("#firstname").removeAttribute("class");
    } else {
        message.innerText = "Prénom invalide";
        errors.splice(1, 1, 0);
    }
}

function validAge(inputAge) {
    let age = /^[0-9]{1,2}$/g;
    let testAge = age.test(inputAge.value);
    let message = document.querySelector(".message3");
    if (testAge) {
        message.innerText = "Age valide";
        errors.splice(2, 1, 1);
        document.querySelector("#age").removeAttribute("class");
    } else {
        message.innerText = "Age invalide";
        errors.splice(2, 1, 0);
    }
}

function validzip(inputZip) {
    let zip = /^[0-9]{5,5}$/g;
    let testZip = zip.test(inputZip.value);
    let message = document.querySelector(".message4");
    if (testZip) {
        message.innerText = "Code postal valide";
        errors.splice(3, 1, 1);
        document.querySelector("#zip").removeAttribute("class");
    } else {
        message.innerText = "Code postal invalide";
        errors.splice(3, 1, 0);
    }
}

function validEmail(inputEmail) {
    let regExpEmail = new RegExp(
        "^[A-Za-z0-9.-_]+[@]{1}[A-Za-z0-9.-_]+[.]{1}[a-z]{2,10}$",
        "g"
    );
    let testEmail = regExpEmail.test(inputEmail.value);
    let message = document.querySelector(".message5");
    if (testEmail) {
        message.innerText = "Email valide";
        errors.splice(4, 1, 1);
        document.querySelector("#email").removeAttribute("class");
    } else {
        message.innerText = "Email invalide";
        errors.splice(4, 1, 0);
    }
}

function validPassNumber(inputPassNumber) {
    let regExpPassNumber = new RegExp("^[0-9]{2}[A-Z]{2}[0-9]{5}$", "g");
    let testPassNumber = regExpPassNumber.test(inputPassNumber.value);
    let message = document.querySelector(".message6");
    if (testPassNumber) {
        message.innerText = "Numéro de passeport valide";
        errors.splice(5, 1, 1);
        document.querySelector("#passNumber").removeAttribute("class");
    } else {
        message.innerText = "Numéro de passeport invalide";
        errors.splice(5, 1, 0);
    }
}

function validSocial(inputSocial) {
    let regExpSocial = new RegExp("^([1]|[2]){1}[0-9]{12}$", "g");
    let testSocial = regExpSocial.test(inputSocial.value);
    let message = document.querySelector(".message7");
    if (testSocial) {
        message.innerText = "Numéro de sécurité sociale valide";
        errors.splice(6, 1, 1);
        document.querySelector("#socialNumber").removeAttribute("class");
    } else {
        message.innerText = "Numéro de sécurité sociale invalide";
        errors.splice(6, 1, 0);
    }
    console.log(errors);
}

function showErrors() {
    const name = document.getElementById("name");
    const firstName = document.getElementById("firstname");
    const age = document.getElementById("age");
    const zip = document.getElementById("zip");
    const mail = document.getElementById("email");
    const passNumber = document.getElementById("passNumber");
    const social = document.getElementById("socialNumber");
    if (errors[0] == 0) {
        name.setAttribute("class", "invalid");
    }
    if (errors[1] == 0) {
        firstName.setAttribute("class", "invalid");
    }
    if (errors[2] == 0) {
        age.setAttribute("class", "invalid");
    }
    if (errors[3] == 0) {
        zip.setAttribute("class", "invalid");
    }
    if (errors[4] == 0) {
        mail.setAttribute("class", "invalid");
    }
    if (errors[5] == 0) {
        passNumber.setAttribute("class", "invalid");
    }
    if (errors[6] == 0) {
        social.setAttribute("class", "invalid");
    }
}

form.name.addEventListener("input", function () {
    validName(this);
});

form.firstname.addEventListener("input", function () {
    validFirstName(this);
});

form.age.addEventListener("input", function () {
    validAge(this);
});

form.zip.addEventListener("input", function () {
    validzip(this);
});

form.email.addEventListener("input", function () {
    validEmail(this);
});

form.passNumber.addEventListener("input", function () {
    validPassNumber(this);
});

form.socialNumber.addEventListener("input", function () {
    validSocial(this);
});

form.addEventListener("submit", function (e) {
    if (errors.includes(0)) {
        e.preventDefault();
        showErrors();
    }
});
