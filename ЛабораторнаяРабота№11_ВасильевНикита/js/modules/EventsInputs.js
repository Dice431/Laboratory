function SetMaskForInputsPhone () {
    let arrInputs = document.querySelectorAll("input[rel='phone']");

    arrInputs.forEach(it => {
        it.addEventListener('input', e => {
            let el = e.target;
            let matrix = "+7 (___) ___-__-__";
            let i = 0;
            let def = matrix.replace(/\D/g, "");
            let value = el.value.replace(/\D/g, "");

            if (def.length >= value.length) {
                value = def;
            }

            e.target.value = matrix.replace(/./g, a => {
                return /[_\d]/.test(a) && i < value.length ? value.charAt(i++) : i >= value.length ? "" : a
            });
        })
    })
}

export default SetMaskForInputsPhone;