class HelpPopUp extends HTMLElement {
    closePopUp() {
        const wrapper = this.shadowRoot.getElementById('help-popup');
        wrapper.style.display = 'none';
    }

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        // use div as wrapper
        const wrapper = document.createElement('div');
        wrapper.setAttribute('id', 'help-popup');
        // close icon
        const close = wrapper.appendChild(document.createElement('img'));
        close.setAttribute('src', 'icons/close.svg');
        close.setAttribute('id', 'close-icon');
        // title
        const title = wrapper.appendChild(document.createElement('h3'));
        title.innerHTML = 'Help';
        // event listener for close icon
        close.addEventListener('click', this.closePopUp.bind(this));
        // use ::part pseudo-element to style element outside of shadow tree -- for dark mode
        wrapper.setAttribute('part', 'popup-wrapper');
        close.setAttribute('part', 'close-icon');
        title.setAttribute('part', 'help-h3');
        // CSS styling
        const style = document.createElement('style');
        style.textContent = `
        #close-icon {
            width: 15px;
            margin-top: 10px;
            margin-right: 10px;
            position:absolute;
            top:0;
            right:0;
            cursor: pointer;
            opacity: 0.33;
        }
        #close-icon:hover {
            opacity: 1;
            transform: scale(1.1);
        }
        #help-popup {
            display: none;
            position: fixed;
            width: 30%;
            height: 30%;
            border-radius: 4px;
            top:25%;
            left: 34%;
            z-index: 999;
            background-color: whitesmoke;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
            -webkit-animation-name: animatetop; 
            -webkit-animation-duration: 0.3s;
            animation-name: animatetop;
            animation-duration: 0.3s
        }
        @-webkit-keyframes animatetop {
            from {top:-200px; opacity:0} 
            to {top:70; opacity:1}
        }
        @keyframes animatetop {
            from {top:-200px; opacity:0}
            to {top:70; opacity:1}
        }
        #help-popup > h3{
            font-size: 1.6vw;
            color: #f36060;
            border-bottom: solid 1px #d2d2d2;
            padding-bottom: 5px;
            width: 85%;
            font-weight: 500;
            margin: 20px auto 10px auto;
        }`;
        shadow.appendChild(wrapper);
        shadow.appendChild(style);
    }
}
customElements.define('help-popup', HelpPopUp);

window.addEventListener('load', () => {
    const helpPopUp = document.createElement('help-popup');
    helpPopUp.setAttribute('class', 'popup');
    document.body.appendChild(helpPopUp);
    const helpBtn = document.getElementById('help-button');
    helpBtn.addEventListener('click', () => {
        const btnSound = new Audio('./icons/btnClick.mp3');
        btnSound.volume = 0.01*parseInt(localStorage.getItem('volume'), 10);
        btnSound.play();
        // this makes sure any popup is closed before opening current popup
        const popups = Array.from(document.getElementsByClassName('popup'));
        for (let i = 0; i < popups.length; i++) {
            popups[i].closePopUp();
        }
        helpPopUp.shadowRoot.getElementById('help-popup').setAttribute('style', 'display:block');
    });
});