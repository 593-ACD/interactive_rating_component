const buttons = document.querySelectorAll(".bnt");
const submitButton = document.querySelector('.sub_bnt');
const thankYouState = document.querySelector('.thankyou_state');
const ratingState = document.querySelector('.rating_state');
const ratingValue = document.querySelector('.rating_value');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        ratingValue.innerHTML = button.innerHTML;
    })
})


submitButton.addEventListener('click', e => {
    ratingState.style.display = 'none';
    thankYouState.style.display = 'flex';

    console.log('si weeee ')
})
