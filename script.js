const popupbtn = document.querySelector('.popbtn'),
    cancelBtn = document.querySelector('.cancel');
    deleteBtn = document.querySelector('.delete');

popupbtn.addEventListener('click' , () => {
    document.querySelector('.popup').classList.add('active')
})

cancelBtn.addEventListener('click' , () => {
    document.querySelector('.popup').style.display = 'none';
})

deleteBtn.addEventListener('click' , () => {
    document.querySelector('.popup').style.display = 'none';
    popupbtn.textContent = 'Account deleted'
})