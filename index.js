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