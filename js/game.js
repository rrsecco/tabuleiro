var timeStart = 30

window.addEventListener('beforeunload', function (event) {
    // Define a mensagem de aviso
    var message = "Tem certeza que deseja sair desta página? As mudanças não salvas serão perdidas.";
    
    // Para navegadores modernos
    event.preventDefault();
    event.returnValue = message; 
    
    // Para navegadores mais antigos
    return message;
});



window.onload = () => {
    const clockDom = document.querySelector("#time")
    clockDom.textContent = timeStart

    setInterval(() => {
        clockDom.textContent = timeStart
        
        timeStart--

        if(timeStart == 25){
            window.open('https://docs.google.com/forms/d/e/1FAIpQLScmqbmJey1dFLF22fyJBUIV3KuEwkPJnj0YhyE8f5rg7eeXxQ/viewform?usp=sharing', 'popup')
        }

        if(timeStart <= 0){
            timeStart = 0
        }

    }, 60000)

}
