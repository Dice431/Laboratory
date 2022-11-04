function OepnModalEnter() {
    let body = document.querySelector('body');
    let modal = document.querySelector('#modal_enter');
    let openModalEnter = document.querySelector('#open_modalEnter');
    let closeModal = document.querySelector('#form_img_close');

    openModalEnter.addEventListener('click', e => {
        e.preventDefault();

        modal.classList.add('show');
        body.classList.add('hide_scroll');
    });

    closeModal.addEventListener('click', () => {
        let login = document.querySelector("#login");
        let pass = document.querySelector("#password");

        login.value = null;
        pass.value = null;

        modal.classList.remove('show');
        body.classList.remove('hide_scroll');
        modal.classList.add('hide');
    });
}

export default OepnModalEnter;