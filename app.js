const minusButtons = document.getElementsByClassName("minus-btn");
const plusButtons = document.getElementsByClassName("plus-btn");
const quantityField = document.getElementsByClassName("quantity-field");
const phonePrice = 1219;
const phoneCase = 59;


function totalPricing(mobilePrice, casePrice) {
    const subtotalField = document.getElementById('subtotal-field');
    const taxField = document.getElementById('tax-field');
    const totalField = document.getElementById('total-field');
    let totalTax = 0;


    const subtotal = mobilePrice + casePrice;
    subtotalField.innerText = subtotal;
    if (subtotal > 2000) {
        totalTax = (subtotal * 0.05).toFixed(2);

        taxField.innerText = totalTax;
        console.log(totalTax);
    }
    totalField.innerText = subtotal + parseFloat(totalTax);



}

function pricing(quantityOfProduct, index) {
    const mobilePrice = document.getElementById("mobile-price");
    const casePrice = document.getElementById("case-price");

    if (index == 0) {
        mobilePrice.innerText = parseInt(quantityOfProduct) * phonePrice;
    }
    else {
        casePrice.innerText = parseInt(quantityOfProduct) * phoneCase;
    }

    totalPricing(parseInt(mobilePrice.innerText), parseInt(casePrice.innerText));

}

function changingQuantity(isAdd, index) {
    if (isAdd == true) {
        quantityField[index].value = parseInt(quantityField[index].value) + 1;
    }
    else {
        if (parseInt(quantityField[index].value) != 1) {
            quantityField[index].value = parseInt(quantityField[index].value) - 1;
        }
    }
    pricing(quantityField[index].value, index);
}

// for all the minusButtons 
for (const minusButton of minusButtons) {
    minusButton.addEventListener("click", function () {
        if (minusButton == minusButtons[0]) {
            changingQuantity(false, 0);
        }
        else {
            changingQuantity(false, 1);
        }
    })
}

// for all the plus buttons 
for (const plusButton of plusButtons) {
    plusButton.addEventListener("click", function () {
        if (plusButton == plusButtons[0]) {
            changingQuantity(true, 0);
        }
        else {
            changingQuantity(true, 1);
        }
    })
}