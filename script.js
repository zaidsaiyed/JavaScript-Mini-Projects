const body = document.getElementsByTagName('body')[0];
console.log(body);


function changeColor(name) {
  body.style.backgroundColor = name;
  showToast(`You selected ${name}`);
}

function randomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }   
    showToast(`You selected ${color}`);
    body.style.backgroundColor = color;
}

function showToast(message) {
    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000); 
}