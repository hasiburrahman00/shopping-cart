const casePrice = document.getElementById('case-price');
const casePlus = document.getElementById('case-plus');
const caseMinus = document.getElementById('case-minus');
const caseCount = document.getElementById('case-counter');
const phonePrice = document.getElementById('phone-price');
const phonePlus = document.getElementById('phone-plus');
const phoneMinus = document.getElementById('phone-minus');
const phonecount = document.getElementById('phone-count');


function caseCounterFunc(isIncrease, product) {
    
    let updateProductCount;

    if (isIncrease) {
        updateProductCount = parseInt(product.value) + 1;
    } else {
        updateProductCount = parseInt(product.value) - 1;
    }
    product.value = updateProductCount;
    return updateProductCount;
}



casePlus.addEventListener('click', function () {
    const caseNumber = caseCounterFunc(true, caseCount);
    const caseFinalPrice = caseNumber * 59;
    casePrice.innerText = caseFinalPrice;
})

caseMinus.addEventListener('click', function () {

    const caseNumber = caseCounterFunc(false, caseCount);
    const caseFinalPrice = caseNumber * 59;
    casePrice.innerText = caseFinalPrice;
})





phonePlus.addEventListener('click', function () {
    const phoneNumber = caseCounterFunc(true, phonecount);
    const phoneFinalPrice = phoneNumber * 1219;
    phonePrice.innerText = phoneFinalPrice;
})

phoneMinus.addEventListener('click', function () {
    const phoneNumber = caseCounterFunc(false, phonecount);
    const phoneFinalPrice = phoneNumber * 1219;
    phonePrice.innerText = phoneFinalPrice;
})