document.getElementById('button').addEventListener('click', () => {
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');

        if(password1.value != password2.value) {
            alert(`The passwords didn't match.`);
            password2.value = "";       
        } else if(password1.value == password2.value && password1.value > 8 && password2.value > 8) {
            alert(`Logged in!`)
        }
    
})
