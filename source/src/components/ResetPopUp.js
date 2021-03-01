class ResetPopUp extends HTMLElement {
    reset() {
        stop();
        let taskList = Array.from(document.getElementById('task-list-elements').getElementsByTagName('task-item'));
        for (let i = 0; i < taskList.length; i++) {
            taskList[i].removeTask();
        }
        this.closePopUp();
    }
    
    closePopUp() {
        let wrapper = this.shadowRoot.getElementById('reset-confirm-popup');
        wrapper.style.display = 'none';
    }

    constructor() {
        super();
        let shadow = this.attachShadow({mode: 'open'});
        // use div as wrapper
        let wrapper = document.createElement('div');
        wrapper.setAttribute('id', 'reset-confirm-popup');
        let title = wrapper.appendChild(document.createElement('h3'));
        title.innerHTML = 'Are you sure?';
        // append confirm and cancel buttons
        let confirmBtn = wrapper.appendChild(document.createElement('button'));
        confirmBtn.setAttribute('class', 'reset-popup-btns');
        confirmBtn.setAttribute('id', 'confirm-reset-btn');
        confirmBtn.innerHTML = 'Confirm';
        let cancelBtn = wrapper.appendChild(document.createElement('button'));
        cancelBtn.setAttribute('class', 'reset-popup-btns');
        cancelBtn.setAttribute('id', 'cancel-reset-btn');
        cancelBtn.innerHTML = 'Cancel';
        // event listeners
        confirmBtn.addEventListener('click', this.reset.bind(this));
        cancelBtn.addEventListener('click', this.closePopUp.bind(this));
        // CSS styling
        let style = document.createElement('style');
        style.textContent = `
        #reset-confirm-popup {
            display: none;
            position: fixed;
            width: 30%;
            height: 30%;
            border-radius: 4px;
            top:25%;
            left: 34%;
            border: 3px solid #f1f1f1;
            z-index: 1;
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
            width: 20%;
            font-size: 1em;
            font-weight: 500;
            outline: none;
        }
        .reset-popup-btns:hover {
            filter: brightness(105%);
            transform: scale(1.1);
        }
        #confirm-reset-btn {
            position: absolute;
            float:left;
            left: 5em;
            bottom: 2em;
        }
        #cancel-reset-btn {
            position: absolute;
            float:right;
            right: 5em;
            bottom: 2em;
        }`
        shadow.appendChild(wrapper);
        shadow.appendChild(style);
    }
}
customElements.define('reset-popup', ResetPopUp);
    
var resetPopUp = document.createElement('reset-popup');
document.body.appendChild(resetPopUp);
resetBtn = document.getElementById("reset-button");
resetBtn.addEventListener('click', function() {
    resetPopUp.shadowRoot.getElementById('reset-confirm-popup').setAttribute('style', 'display:block');
});