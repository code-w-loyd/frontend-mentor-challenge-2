const togglesI = document.querySelectorAll('.info-head');
const toggles = Array.from(togglesI);

const btnsI = document.querySelectorAll('.btn')
const btns = Array.from(btnsI);

    toggles.forEach((toggle, index) => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            
            const textsE = document.querySelectorAll('.text');
            const texts = Array.from(textsE);
            
            
            texts.forEach((text, textIndex) => {
                
                if (textIndex === index) {
                    text.style.display = toggle.classList.contains('active') ? 'block' : 'none';
                }
            })
        btns.forEach((btn,btnindex)=>{
            if(index===btnindex){
                btn.classList.toggle('active');
            }
        })
    });
});


