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