const mybtn = document.getElementById('btn');
const hidPopup = document.getElementById('hidepopup');
const videoBox = document.getElementById('videobox');


mybtn.addEventListener('click', ()=> {
    videoBox.style.display = "flex";
})

hidPopup.addEventListener('click', ()=> {
    videoBox.style.display = "none";
})

