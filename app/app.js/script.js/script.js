const form = document.getElementById('form');
const username = document.getElementById('username');
const username2 = document.getElementById('username2');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

//Condition for errors
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    //The message
    errorDisplay.innertext = message;
    inputControl.classList.add('error');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errordisplay = inputControl.querySelector('.error');

    //Remove the error you message and class!!!!!
    errordisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const username2Value = username2.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === '') {
        setError(username, 'First name cannot be empty');
    }else{
        setSuccess(username);
    }

    if(username2Value === '') {
        setError(username2, 'Last name cannot be empty');
    }else {
        setSuccess(username2);
    }

    if(emailValue === '') {
        setError(email, 'Please provide an email');
    }else if(!isValidEmail(emailValue)) {
        setError(email, 'Looks like this is not an email')
    }else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password cannot be empty');
    }else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 chracters.')
    }else {
        setSuccess(password);
    }
    
};


