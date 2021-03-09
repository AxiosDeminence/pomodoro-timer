class ResetPopUp extends HTMLElement {
    reset() {
        stop();
        const taskList = Array.from(document.getElementById('task-list-elements').getElementsByTagName('task-item'));
        for (let i = 0; i < taskList.length; i += 1) {
            console.log(taskList[i]);
            taskList[i].removeTask();
        }
        localStorage.setItem('id', `${0}`);
        this.closePopUp();
    }

    closePopUp() {
        const btnSound = new Audio('./icons/btnClick.mp3');
        btnSound.play();
        const wrapper = this.shadowRoot.getElementById('reset-confirm-popup');
        wrapper.style.display = 'none';
        console.log('here');
    }

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        // use div as wrapper
        const wrapper = document.createElement('div');
        wrapper.setAttribute('id', 'reset-confirm-popup');
        // close icon
        const close = wrapper.appendChild(document.createElement('img'));
        close.setAttribute('src', './icons/close.svg');
        close.setAttribute('id', 'close-icon');
        // title
        const title = wrapper.appendChild(document.createElement('h3'));
        title.innerHTML = 'Are you sure?';
        // content
        const content = wrapper.appendChild(document.createElement('h5'));
        content.setAttribute('id', 'reset-content');
        content.innerHTML = 'This will reset your current pomodoro session and wipe out your jotted tasks!';
         // wrap confirm button in a footer
        const footer = wrapper.appendChild(document.createElement('div'));
        footer.setAttribute('class', 'button-footer');
        const confirmBtn = footer.appendChild(document.createElement('button'));
        confirmBtn.setAttribute('class', 'reset-popup-btns');
        confirmBtn.setAttribute('id', 'confirm-reset-btn');
        confirmBtn.innerHTML = 'Confirm';
        // event listeners for confirm button and close icon
        confirmBtn.addEventListener('click', this.reset.bind(this));
        close.addEventListener('click', this.closePopUp.bind(this));
        
        // use ::part pseudo-element to style element outside of shadow tree -- for dark mode
        wrapper.setAttribute('part', 'popup-wrapper');
        close.setAttribute('part', 'close-icon');
        title.setAttribute('part', 'reset-confirm-h3');
        content.setAttribute('part', 'reset-content');
        footer.setAttribute('part', 'btn-footer');
        confirmBtn.setAttribute('part', 'confirm-btn');
        // CSS styling
        const style = document.createElement('style');
        style.textContent = `
        .button-footer {
            background-color: rgb(234 234 234);
            padding: 14px 20px;
            text-align: right;
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
        }
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
        #reset-content {
            color: rgb(85, 85, 85);
            width: 85%;
            font-weight: 500;
            margin: 20px auto 0 auto;
        }
        #reset-confirm-popup {
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
        #reset-confirm-popup > h3{
            font-size: 1.6vw;
            color: #f36060;
            border-bottom: solid 1px #d2d2d2;
            padding-bottom: 5px;
            width: 85%;
            font-weight: 500;
            margin: 20px auto 10px auto;
        }
        .reset-popup-btns {
            cursor: pointer;
            border-style: none;
            border-radius: 4px;
            text-align: center;
            background-color:#f36060;
            color:#fff;
            font-family: 'Quicksand', sans-serif;
            height: 17%;
            width: 27%;
            font-size: 1em;
            font-weight: 500;
            outline: none;
        }
        .reset-popup-btns:hover {
            filter: brightness(105%);
            transform: scale(1.1);
        }
        #confirm-reset-btn {
            padding: 8px 12px;
        }
        #cancel-reset-btn {
            position: absolute;
            float:right;
            right: 5em;
            bottom: 2em;
        }`;
        shadow.appendChild(wrapper);
        shadow.appendChild(style);
    }
}
customElements.define('reset-popup', ResetPopUp);

window.addEventListener('DOMContentLoaded', () => {
    const resetPopUp = document.createElement('reset-popup');
    resetPopUp.setAttribute('class', 'popup');
    document.body.appendChild(resetPopUp);
    const resetBtn = document.getElementById('reset-button');
    resetBtn.addEventListener('click', () => {
        const btnSound = new Audio('./icons/btnClick.mp3');
        btnSound.play();
        // this makes sure any popup is closed before opening current popup
        const popups = Array.from(document.getElementsByClassName('popup'));
        for (let i = 0; i < popups.length; i++) {
            popups[i].closePopUp();
        }
        resetPopUp.shadowRoot.getElementById('reset-confirm-popup').setAttribute('style', 'display:block');
    });
});

module.exports = ResetPopUp;
