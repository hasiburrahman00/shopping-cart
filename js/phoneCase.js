
casePlus.addEventListener('click', function () {
    const caseNumber = caseCounterFunc(true, caseCount);
    const caseFinalPrice = caseNumber * 59;
    casePrice.innerText = caseFinalPrice;
    totalBills();
})

caseMinus.addEventListener('click', function () {

    const caseNumber = caseCounterFunc(false, caseCount);
    const caseFinalPrice = caseNumber * 59;
    casePrice.innerText = caseFinalPrice;
    totalBills();
})




