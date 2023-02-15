const casePrice = document.getElementById('case-price');
const casePlus = document.getElementById('case-plus');
const caseMinus = document.getElementById('case-minus');
const caseCount = document.getElementById('case-counter');

function caseCounter(condition) {
    const caseCounter = caseCount.value;
    let updateCaseCount = 0;
    const caseCountValue = parseInt(caseCounter)
    if(condition) {
         updateCaseCount = caseCountValue + 1;
    }else {
         updateCaseCount = caseCountValue - 1;
    }
    caseCount.value = updateCaseCount;
    return updateCaseCount;
}



casePlus.addEventListener('click', function() {
    const caseNumber = caseCounter(true);
    const caseFinalPrice = caseNumber*59;
    casePrice.innerText = caseFinalPrice;
})

caseMinus.addEventListener('click', function() {
    const caseNumber = caseCounter(false);
    const caseFinalPrice = caseNumber*59;
    casePrice.innerText = caseFinalPrice;
})