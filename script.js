let password = document.querySelector('#button');
function genPassword(){
    let chars = "0123456789abcdefgxijkmlopqrstuvhyshchomnzwu!@#$%^$*()QWERTYUIOPASDFGHJKLZXCVBNM";
    let passwordLength = 12;
    let password = '';
    for (let i = 0; i < password; i++){
        let randomNuber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNuber, randomNuber + 1);
    }
    document.querySelector('#password').value = password;
}


function copyPassword() {
    let copyText = document.querySelector('#password');
    copyText.select();
    copyText.setSelctRange(0,999);
    document.execCommand('copy');
}