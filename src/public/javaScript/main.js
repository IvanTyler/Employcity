const $checkoutForm = document.forms.checkoutForm;
const $selectTypeSystem = document.querySelector('.select-type-system')
const $selectTypeSystemType = document.querySelector('.select-type-system__type')
const $selectTypeSystemList = document.querySelector('.select-type-system-list')

const $emailForm = document.querySelector('#emailForm')
const $nameForm = document.querySelector('#nameForm')

let $currentOptionText = ''
$selectTypeSystem.addEventListener('click', (event) => {
    if (event.target.hasAttribute('data-option')) {
        const $currentOption = event.target.closest('[data-id]')
        $selectTypeSystemType.innerText = $currentOption.textContent
        $currentOptionText = $currentOption.textContent
    }
})

function getTypesSystem() {
    let max = 999999999;
    let min = 100000000;
    return Array.from(Array(20)).map((_, i) => {
        return {
            id: Math.floor(Math.random() * (max - min) + min),
            name: `Sed ut perspiciatis ${i + 1}`,
        }
    })
}

const typesSystemList = getTypesSystem()

function createTypesSystemListHTML(typesSystemList) {
    return typesSystemList.map(el => {
        return `<li class="select-type-system-list__option" data-option data-id="${el.id}">${el.name}</li>`
    }).join('');
}

function addTypesSystemHTML() {
    const dataTypesSystemHTML = createTypesSystemListHTML(typesSystemList);
    $selectTypeSystemList.innerHTML = ''
    $selectTypeSystemList.insertAdjacentHTML('afterbegin', dataTypesSystemHTML)
}

$selectTypeSystem.addEventListener('click', (e) => {
    if ($selectTypeSystem.classList.contains('active')) {
        $selectTypeSystem.classList.remove('active')
        setTimeout(() => $selectTypeSystemList.innerHTML = '', 1)
    } else {
        $selectTypeSystem.classList.add('active')
        setTimeout(() => addTypesSystemHTML(), 1)
    }
})

$checkoutForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target))
    const myformData = {
        ...formData,
        typeSystem: $currentOptionText,
    }

    if (!$emailForm.value) {
        $emailForm.classList.add('error')
    }
    if (!$nameForm.value) {
        $nameForm.classList.add('error')
    } else {
        $nameForm.classList.remove('error')
        $emailForm.classList.remove('error')
        console.log(myformData);
    }
})
const $formCheckoutRange = document.querySelector('.form-checkout-range__range')
const $formCheckoutRangeProgress = document.querySelector('.form-checkout-range-top__progress')

$formCheckoutRange.addEventListener('input', (event) =>
    $formCheckoutRangeProgress.innerHTML = `${event.target.value} %`
)
const $circleAllElemets = document.querySelectorAll('.circle')

setInterval(() => {
    for (let i = 0; i < $circleAllElemets.length; i++) {
        if ($circleAllElemets[i].classList.contains('circle-animate')) {
            $circleAllElemets[i].classList.remove('circle-animate');
            $circleAllElemets.length - 1 === i ?
                $circleAllElemets[0].classList.add('circle-animate') :
                $circleAllElemets[i + 1].classList.add('circle-animate');
            break;
        }
    }
}, 4000);