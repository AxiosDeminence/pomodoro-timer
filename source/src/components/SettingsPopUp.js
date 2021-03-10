class SettingsPopUp extends HTMLElement {
    closePopUp() {
        const wrapper = this.shadowRoot.getElementById('settings-confirm-popup');
        wrapper.style.display = 'none';
    }

    confirmSettings() {
        const pomoLength = this.shadowRoot.getElementById('pomo-length-input').value;
        const shortBreak = this.shadowRoot.getElementById('short-break-input').value;
        const longBreak = this.shadowRoot.getElementById('long-break-input').value;
        localStorage.setItem('pomo-length', pomoLength);
        localStorage.setItem('short-break-length', shortBreak);
        localStorage.setItem('long-break-length', longBreak);
        stop();
        this.closePopUp();
    }

    toggleMode() {
        if (localStorage.getItem('theme') == 'light') {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        document.body.classList.toggle('dark-theme');
    }

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        // use div as wrapper
        const wrapper = document.createElement('div');
        wrapper.setAttribute('id', 'settings-confirm-popup');
        // close icon
        const close = wrapper.appendChild(document.createElement('img'));
        close.setAttribute('src', 'icons/close.svg');
        close.setAttribute('id', 'close-icon');
        // title
        const title = wrapper.appendChild(document.createElement('h3'));
        title.innerHTML = 'Settings';
        // session title
        const sessionTitle = wrapper.appendChild(document.createElement('h4'));
        sessionTitle.setAttribute('id', 'timer-settings');
        sessionTitle.innerHTML = 'Session Length (minutes)';
        // session div
        const session = wrapper.appendChild(document.createElement('div'));
        session.setAttribute('id', 'session');
        // append input forms
        const pomoWrapper = session.appendChild(document.createElement('div'));
        pomoWrapper.setAttribute('class', 'session-inputs');
        const pomoLabel = pomoWrapper.appendChild(document.createElement('label'));
        pomoLabel.setAttribute('for', 'pomo');
        pomoLabel.innerHTML = 'Pomo';
        const pomoInput = pomoWrapper.appendChild(document.createElement('input'));
        pomoInput.setAttribute('type', 'number'); // TODO: handle negatives
        pomoInput.setAttribute('id', 'pomo-length-input');
        pomoInput.setAttribute('value', parseInt(localStorage.getItem('pomo-length')));
        pomoInput.setAttribute('min', 1); // values subj. to change
        pomoInput.setAttribute('max', 60); // values subj. to change
        const shortBreakWrapper = session.appendChild(document.createElement('div'));
        shortBreakWrapper.setAttribute('class', 'session-inputs');
        const shortBreakLabel = shortBreakWrapper.appendChild(document.createElement('label'));
        shortBreakLabel.setAttribute('for', 'short-break');
        shortBreakLabel.innerHTML = 'Short Break';
        const shortBreakInput = shortBreakWrapper.appendChild(document.createElement('input'));
        shortBreakInput.setAttribute('type', 'number'); // TODO: handle negatives
        shortBreakInput.setAttribute('id', 'short-break-input');
        shortBreakInput.setAttribute('value', parseInt(localStorage.getItem('short-break-length')));
        shortBreakInput.setAttribute('min', 1); // values subj. to change
        shortBreakInput.setAttribute('max', 60); // values subj. to change
        const longBreakWrapper = session.appendChild(document.createElement('div'));
        longBreakWrapper.setAttribute('class', 'session-inputs');
        const longBreakLabel = longBreakWrapper.appendChild(document.createElement('label'));
        longBreakLabel.setAttribute('for', 'long-break');
        longBreakLabel.innerHTML = 'Long Break';
        const longBreakInput = longBreakWrapper.appendChild(document.createElement('input'));
        longBreakInput.setAttribute('type', 'number'); // TODO: handle negatives
        longBreakInput.setAttribute('id', 'long-break-input');
        longBreakInput.setAttribute('value', parseInt(localStorage.getItem('long-break-length')));
        longBreakInput.setAttribute('min', 1); // values subj. to change
        longBreakInput.setAttribute('max', 60); // values subj. to change
        const darkModeDiv = wrapper.appendChild(document.createElement('div'));
        darkModeDiv.setAttribute('id', 'dark-mode');
        const darkModeTitle = darkModeDiv.appendChild(document.createElement('h4'));
        darkModeTitle.setAttribute('id', 'enable-dark-mode');
        darkModeTitle.innerHTML = 'Enable Dark Mode?';
        const modeSwitch = darkModeDiv.appendChild(document.createElement('label'));
        modeSwitch.setAttribute('class', 'switch');
        const checkboxInput = modeSwitch.appendChild(document.createElement('input'));
        checkboxInput.setAttribute('type', 'checkbox');
        if (localStorage.getItem('theme') == 'dark') {
            checkboxInput.checked = 'checked';
        }
        const slider = modeSwitch.appendChild(document.createElement('span'));
        slider.setAttribute('class', 'slider');
        slider.addEventListener('click', this.toggleMode.bind(this));
        const volumeDiv = wrapper.appendChild(document.createElement('div'));
        volumeDiv.setAttribute('id', 'volume-div');
        const volumeTitle = volumeDiv.appendChild(document.createElement('h4'));
        volumeTitle.setAttribute('id', 'sound-volume');
        volumeTitle.innerHTML = 'Audio Volume';
		const volP = volumeDiv.appendChild(document.createElement('p'));
        const volSpan = volP.appendChild(document.createElement('span'));
        volSpan.setAttribute('id', 'volume-number');
        const sliderDiv = volumeDiv.appendChild(document.createElement('div'));
        sliderDiv.setAttribute('class', 'slider-div');
        const rangeInput = sliderDiv.appendChild(document.createElement('input'));
        rangeInput.setAttribute('type', 'range');
        rangeInput.setAttribute('min', 0);
        rangeInput.setAttribute('max', 100);
        rangeInput.setAttribute('value', 50);
        rangeInput.setAttribute('class', 'vol-slider');
        rangeInput.setAttribute('id', 'range');
        volSpan.innerHTML = rangeInput.value;
        rangeInput.oninput = function () {	// add event listener maybe?
            volSpan.innerHTML = this.value;
        };
        const footer = wrapper.appendChild(document.createElement('div'));
        footer.setAttribute('class', 'button-footer');
        // append confirm button
        const confirmBtn = footer.appendChild(document.createElement('button'));
        confirmBtn.setAttribute('class', 'settings-popup-btns');
        confirmBtn.setAttribute('id', 'confirm-settings-btn');
        confirmBtn.innerHTML = 'Confirm';
        // event listeners
        confirmBtn.addEventListener('click', this.confirmSettings.bind(this));
        close.addEventListener('click', this.closePopUp.bind(this));
        // use ::part pseudo-element to style element outside of shadow tree -- for dark mode
        wrapper.setAttribute('part', 'settings-confirm-popup');
        close.setAttribute('part', 'close-icon');
        title.setAttribute('part', 'settings-h3');
        sessionTitle.setAttribute('part', 'timer-settings');
        pomoLabel.setAttribute('part', 'session-labels');
        pomoInput.setAttribute('part', 'length-inputs');
        shortBreakLabel.setAttribute('part', 'session-labels');
        shortBreakInput.setAttribute('part', 'length-inputs');
        longBreakLabel.setAttribute('part', 'session-labels');
        longBreakInput.setAttribute('part', 'length-inputs');
        darkModeTitle.setAttribute('part', 'enable-dark-mode');
        volumeTitle.setAttribute('part', 'sound-volume');
        volSpan.setAttribute('part', 'volume-number');
        rangeInput.setAttribute('part', 'range-slider');
        footer.setAttribute('part', 'btn-footer');
        confirmBtn.setAttribute('part', 'confirm-btn');
        const style = document.createElement('style');
        style.textContent = `
        p {
			display: flex;
    		align-items: center;
    		margin: 0;
		}
		#volume-number {
			font-size: 14px;
			font-family: Arial;
			color: rgb(85, 85, 85);
			margin-left: 20px;
		}
		.vol-slider {
			background-color: #ccc;
			-webkit-appearance: none;
			appearance: none;
			border-radius: 50px;
			height: 7px;
			outline: none;
			cursor: pointer;
			opacity: 0.7;
  			-webkit-transition: .1s;
 			transition: opacity .1s;
		}
		.vol-slider:hover {
			opacity: 1;
		}
		.vol-slider::-webkit-slider-thumb {
			-webkit-appearance: none;
			appearance: none;
			cursor: pointer;
			width: 20px;
  			height: 20px;
  			border-radius: 50%;
  			background: #e6e5e5;
			box-shadow: 0 0 3px 1px rgba(0,0,0,0.2);
		}
		.vol-slider::-moz-range-thumb {
			cursor: pointer;
			width: 20px;
  			height: 20px;
  			border-radius: 50%;
  			background: #e6e5e5;
			box-shadow: 0 0 3px 1px rgba(0,0,0,0.2);
		}
		#volume-div {
			justify-content: space-between;
			display: flex;
			width: 85%;
			margin: 20px auto 10px auto;
			border-bottom: solid 1px #d2d2d2;
			padding-bottom: 20px;
		}
		.slider-div {
			position: relative;
			display: inline-flex;
			vertical-align: middle;
			align-items: center;
		}
		#sound-volume {
			color: rgb(85, 85, 85);
			margin: 0;
			font-weight: 500;
			display: flex;
			align-items: center;
		}
		#enable-dark-mode {
			color: rgb(85, 85, 85);
			font-weight: 500;
    		margin: 0;
    		display: flex;
    		align-items: center;
		}
		#dark-mode {
			justify-content: space-between;
			display: flex;
			width: 85%;
			margin: 20px auto 10px auto;
			border-bottom: solid 1px #d2d2d2;
			padding-bottom: 20px;
		}
		.switch {
			position: relative;
			display: inline-flex;
			width: 60px;
			height: 34px;
		}
		.switch input[type='checkbox'] { 
			opacity: 0;
			width: 0;
			height: 0;
		}
		.slider {
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: #ccc;
			-webkit-transition: .4s;
			transition: .4s;
			border-radius: 34px;
		}
		.slider:before {
			position: absolute;
			content: "";
			height: 26px;
			width: 26px;
			left: 4px;
			bottom: 4px;
			background-color: white;
			-webkit-transition: 0.2s;
			transition: 0.2s;
			border-radius: 50%;
		}
		input[type='checkbox']:checked + .slider {
			background-color: rgb(163 243 67 / 88%);
		}
		input[type='checkbox']:checked + .slider:before {
			-webkit-transform: translateX(26px);
			-ms-transform: translateX(26px);
			transform: translateX(26px);
		}
		#session {
			justify-content: space-between;
			display: flex;
			width: 85%;
			margin: 10px auto 10px auto;
			border-bottom: solid 1px #d2d2d2;
			padding-bottom: 20px;
		}
		label {
			display: block;
			font-size: 12px;
			color: rgb(85, 85, 85);
			font-weight: 500;
		}
		input[type='number'] {
			font-size: 14px;
			color: rgb(85, 85, 85);
			border: none;
			border-radius: 4px;
			background-color: rgb(234 234 234);
			padding: 10px;
			box-sizing: border-box;
			width: 100%;
			outline: none;
		}
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
        #timer-settings {
            color: rgb(85, 85, 85);
            width: 85%;
			font-weight: 500;
            margin: 20px auto 10px auto;
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
        #settings-confirm-popup {
            display: none;
            position: fixed;
            width: 30%;
            height: 65%;
            border-radius: 4px;
            top:20%;
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
        #settings-confirm-popup > h3{
            font-size: 1.6vw;
            color: #f36060;
            border-bottom: solid 1px #d2d2d2;
            padding-bottom: 5px;
            width: 85%;
			font-weight: 500;
            margin: 20px auto 10px auto;
		}
        .settings-popup-btns {
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
        .settings-popup-btns:hover {
        	filter: brightness(105%);
            transform: scale(1.1);
		}
        #confirm-settings-btn {
            padding: 8px 12px;
        }`;
        shadow.appendChild(wrapper);
        shadow.appendChild(style);
    }
}
customElements.define('settings-popup', SettingsPopUp);

window.addEventListener('load', () => {
    const settingsButton = document.getElementById('setting-button');
    const settingsPopUp = document.createElement('settings-popup');
    settingsPopUp.setAttribute('class', 'popup');
    document.body.appendChild(settingsPopUp);
    settingsButton.addEventListener('click', () => {
        const popups = Array.from(document.getElementsByClassName('popup'));
        for (let i = 0; i < popups.length; i++) {
            popups[i].closePopUp();
        }
        settingsPopUp.shadowRoot.getElementById('settings-confirm-popup').setAttribute('style', 'display:block');
    });
});

module.exports = SettingsPopUp;
