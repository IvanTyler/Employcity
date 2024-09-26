const $formCheckoutRange = document.querySelector('.form-checkout-range__range')
const $formCheckoutRangeProgress = document.querySelector('.form-checkout-range-top__progress')

$formCheckoutRange.addEventListener('input', (event) =>
    $formCheckoutRangeProgress.innerHTML = `${event.target.value} %`
)