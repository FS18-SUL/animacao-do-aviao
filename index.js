btn1.onclick = () => {
    if(btn1.classList.length == 0){
        btn1.classList.add('active');
        setTimeout(() => {
            btn1.classList.remove('active');
        }, 4000);
    }
}