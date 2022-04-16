// Barra Lateral
const menuItems = document.querySelectorAll('.menu-item');
// Mensagens
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
// Busca de mensagens
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//remover classe ativa de todos os itens do menu
const mudaItemAtivo = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
//Tema
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
let root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');


// ===== Barra Lateral ======= 

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        mudaItemAtivo();
        item.classList.add('active');
        if(item.id !== 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('.notification-count').style.display = 'none';
        }
    })
})

//Mensagens

//Destacar card de mensagens quando clicado
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000)
});

//pesquisa de mensagens
const searchMessage = () => {
    const val =  messageSearch.value.toLowerCase();
    message.forEach( chat => {
        let nome = chat.querySelector('h5').textContent.toLowerCase();
        let msg = chat.querySelector('p').textContent.toLowerCase();
        if(nome.includes(val) || msg.includes(val)){
            chat.style.display = 'flex';
        }else {
            chat.style.display = 'none';
        }
    })
}
messageSearch.addEventListener('keyup', searchMessage);

//Customização de tema
//abre
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
//fecha
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);

//======= Fontes ========

//remove classe ativa dos seletores de tamanho de fonte
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
    
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }
        
        // muda o tamanho da fonte raiz dos elementos HTML
        document.querySelector('html').style.fontSize = fontSize;
    })
    
})
//remove classe ativa dos seletores de cor
const removeActiveColorClass = () => {
    colorPalette.forEach(color => {
        color.classList.remove('active');
    })
}

//muda cores primárias
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        removeActiveColorClass();
        let primaryHue;

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})
//valores do plano de fundo
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

//muda o plano de fundo
const mudaBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
}

bg1.addEventListener('click', () => {
    darkColorLightness = '17%';
    lightColorLightness = '95%';
    whiteColorLightness = '100%';
    //adiciona classe ativa
    bg1.classList.add('active');
    //remove classe ativa das outras
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    mudaBg();
});
bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';
    
    //adiciona classe ativa
    bg2.classList.add('active');
    //remove classe ativa das outras
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    mudaBg();
});
bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    
    //adiciona classe ativa
    bg3.classList.add('active');
    //remove classe ativa das outras
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    mudaBg();
});