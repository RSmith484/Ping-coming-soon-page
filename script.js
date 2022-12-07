const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error-msg')
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
form.addEventListener('submit', (e) => {

    let messages = []

    if (email.value === '' || email.value == null) {
        messages.push('An email address is required')
        email.style.borderColor = 'red'
    }
    
    if (email.value.match(emailRegExp)) {
        email.style.borderColor = '#333'
        messages.push('') 
    } 
    else {
        messages.push('Email address is not valid. Please enter a valid email address')
        email.style.borderColor = 'red'
    }
    
    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    }
})