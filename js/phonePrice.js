phonePlus.addEventListener('click', function () {
    const phoneNumber = caseCounterFunc(true, phonecount);
    const phoneFinalPrice = phoneNumber * 1219;
    phonePrice.innerText = phoneFinalPrice;
    totalBills();
})

phoneMinus.addEventListener('click', function () {
    const phoneNumber = caseCounterFunc(false, phonecount);
    const phoneFinalPrice = phoneNumber * 1219;
    phonePrice.innerText = phoneFinalPrice;
    totalBills();
})
