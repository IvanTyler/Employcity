const $selectTypeSystem = document.querySelector('.select-type-system')
const $selectTypeSystemList = document.querySelector('.select-type-system-list')
const $selectTypeSystemType = document.querySelector('.select-type-system__type')

const $formCheckoutRange = document.querySelector('.form-checkout-range__range')
const $formCheckoutRangeProgress = document.querySelector('.form-checkout-range-top__progress')

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

$selectTypeSystem.addEventListener('click', (event) => {
    if (event.target.hasAttribute('data-option')) {
        const $currentOption = event.target.closest('[data-id]')
        const optionId = $currentOption.dataset.id
        $selectTypeSystemType.innerText = $currentOption.textContent
    }
})

$formCheckoutRange.addEventListener('input', (event) =>
    $formCheckoutRangeProgress.innerHTML = `${event.target.value} %`
)