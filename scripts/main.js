
class TimeComponent extends HTMLElement {
    connectedCallback() {
        var currentTime = '<body>Current Time: ${currentTime.getHours()}: ${currentTime.getMinutes()}: ${currentTime.getSeconds()}</body>'
    }
}

customElements.define('current-time', TimeComponent);