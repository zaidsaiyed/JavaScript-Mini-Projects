const body = document.getElementsByTagName("body")
console.log(body)
body.style.backgroundColor = "Red"

function changeColor(name) {
    body.style.backgroundColor = name;
  }

  changeColor()