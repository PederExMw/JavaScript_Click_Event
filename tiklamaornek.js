let newAchorElement = document.createElement('a');
newAchorElement.href = 'https://google.com';
newAchorElement.textContent = 'Tıklayın'

let anchorElement = document.querySelector('p');

anchorElement.append(newAchorElement);

// 2. paragrafı nasıl seçeceğim?

function degisenYazi() {
    anchorElement.textContent = 'Youtube İçin';
    console.log('Tıklandı');
}
anchorElement.addEventListener('click', degisenYazi);

let inputElement = document.querySelector('input');
function userInput() {
    let girilenYazi = inputElement.value;
    console.log(girilenYazi);

}


inputElement.addEventListener('input', userInput);

