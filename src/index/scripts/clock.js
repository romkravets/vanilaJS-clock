export class Clock {

    constructor(rootElement) {
        this.rootElement = rootElement;
        this.render();
        this.startUpdate();
        this.toggle();
        this.isEnable = false;
        this.isEnableTime = false;
    }

    render() {
        const currentDate = new Date;
        this.btn = document.querySelector('div');

        this.clockHour = document.createElement('span');
        this.clockHour.classList.add('clock__hours');
        this.rootElement.appendChild(this.clockHour);
        this.clockHour.textContent = currentDate.getHours() + ' :';

        this.clockMin = document.createElement('span');
        this.clockMin.classList.add('clock__minutes');
        this.rootElement.appendChild(this.clockMin);
        this.clockMin.textContent = currentDate.getMinutes();

        this.clockSec = document.createElement('span');
        this.clockSec.classList.add('clock__seconds');
        this.rootElement.appendChild(this.clockSec);
        this.clockSec.textContent = ' : ' + currentDate.getSeconds();

        this.dateTime = document.createElement('div');
        this.dateTime.classList.add('clock__date');
        this.rootElement.appendChild(this.dateTime);
        this.dateTime.textContent = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();

        this.btn.addEventListener('contextmenu', () => this.toggleTime());
        this.btn.addEventListener('click', () => this.toggle());
    }

    startUpdate() {
        setInterval(() => {
            const currentDate = new Date;
            this.clockHour.textContent = currentDate.getHours() + ' :';
            this.clockMin.textContent = currentDate.getMinutes();
            this.clockSec.textContent = ' : ' + currentDate.getSeconds();
        }, 1000);
    }

    toggle() {

        if (this.isEnable) {
            this.disable();
        } else {
            this.enable();
        }
    }
    enable() {
        this.clockSec.style.display = "none";
        this.isEnable = true;
      }
    disable() {
        this.clockSec.style.display = "flex";
        this.isEnable = false;
      }

    toggleTime() {
        if (this.isEnableTime) {
             this.disableTime();
        } else {
            this.enableTime();
        }
    }
    enableTime() {
        this.dateTime.style.display = "none";
        this.isEnableTime = true;
      }
    disableTime() {
        this.dateTime.style.display = "flex";
        this.isEnableTime = false;
      }
}

