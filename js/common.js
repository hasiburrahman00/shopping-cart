const casePrice = document.getElementById('case-price');
const casePlus = document.getElementById('case-plus');
const caseMinus = document.getElementById('case-minus');
const caseCount = document.getElementById('case-counter');
const phonePrice = document.getElementById('phone-price');
const phonePlus = document.getElementById('phone-plus');
const phoneMinus = document.getElementById('phone-minus');
const phonecount = document.getElementById('phone-count');
const totalBill = document.getElementById('total-bill');
const tax = document.getElementById('tax');
const finalBalance = document.getElementById('final-balance');


function caseCounterFunc(isIncrease, product) {
    
    let updateProductCount;

    if (isIncrease) {
        updateProductCount = parseInt(product.value) + 1;
    } else {
        updateProductCount = parseInt(product.value) - 1;
    }

    product.value = updateProductCount;

    if(updateProductCount < 0) {
        return 0
    }else {
        return updateProductCount;
    }
    
}

function totalBills(){
    const bill = parseInt(casePrice.innerText) + parseInt(phonePrice.innerText);
    totalBill.innerText = bill;
    finalBalance.innerText = bill + parseInt(tax.innerText);
}
