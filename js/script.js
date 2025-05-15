const ringButtons = document.querySelectorAll(".ring-button");

for (let i = 0; i < ringButtons.length; i++) {
  const ringBtn = ringButtons[i];
  ringBtn.addEventListener("click", function (event) {
    // color add korar aga sobgulu check kore purple thakle remove kore dibo and onono ekta border add kore dibo
    for (let j = 0; j < ringButtons.length; j++) {
      ringButtons[j].classList.remove("border-purple-600");
      // for better understanding: ringButtons[j].classList.add("border-yellow-300")
      ringButtons[j].classList.add("border-gray-300");
    }

    // color add kora hocche
    event.target.classList.add("border-purple-600");
    // for better understanding: event.target.classList.remove("border-yellow-300")
    event.target.classList.remove("border-gray-300");

    const productImage = document.getElementById("product-image");
    const color = event.target.id.replace("-color", "");
    // / productImage.src = "../images/gray.png";
    // productImage.src = `../images/${color}.png`;
    // dynamic image access
    productImage.src = "../images/" + color + ".png";
  });
}

function selectWristSize(size) {
  const sizes = ["S", "M", "L", "XL"];
  for (let i = 0; i < sizes.length; i++) {
    const button = document.getElementById("size-" + sizes[i]);

    const element = sizes[i];
    if (size === element) {
      button.classList.add("border-purple-600");
    } else {
      button.classList.remove("border-purple-600");
    }
  }
}


const quantityElement=document.querySelectorAll(".quantity-button")

for (const btn of quantityElement) {
  btn.addEventListener('click',function(event){

    const symbolValue= event.target.innert
  })
}


