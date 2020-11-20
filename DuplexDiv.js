class DuplexDiv extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const α = this.attachShadow({"mode": "open"});
        
        const μ = document.createElement("div");
        const τ = document.createElement("slot");
        const ν = document.createElement("div");
        Object.defineProperty(this, "divElement1", {value: ν, writable: false});
        Object.defineProperty(this, "slotElement", {value: τ, writable: false});
        Object.defineProperty(this, "divElement2", {value: μ, writable: false});
        ν.setAttribute("part", "duplicate");
        μ.append(τ);
        α.append(μ, ν);

        const λ = () => {this.render();}
        this.observer = new MutationObserver(λ);
        this.observer.observe(this, {"subtree": true, "childList": true, "attributes": true, "characterData": true})

        const ξ = () => {
            window.removeEventListener("DOMContentLoaded", ξ);
            this.render();
        }
        window.addEventListener("DOMContentLoaded", ξ);

        if (this.getAttribute("debug") !== null) {
            console.log({
                "class": DuplexDiv,
                "event": "connected"
            })
        }
    }

    static get observedAttributes() {
        return ["debug"];
    }

    render() {
        while (this.divElement1.firstChild) {
            this.divElement1.removeChild(this.divElement1.lastChild);
        }
        this.slotElement.assignedNodes().forEach(ω => {
            this.divElement1.append(ω.cloneNode(true))
        });
        
        if (this.getAttribute("debug") !== null) {
            console.log({
                "class": DuplexDiv,
                "event": "render"
            })
        }
    }

    disconnectedCallback() {
        if (this.getAttribute("debug") !== null) {
            console.log({
                "class": DuplexDiv,
                "event": "disconnected"
            })
        }
    }

    attributeChangedCallback(β, ε, δ) {
        if (this.getAttribute("debug") !== null) {
            console.log({
                "class": DuplexDiv,
                "event": "attributeChanged",
                "parameters": (β, ε, δ)
            })
        }
    }

    adoptedCallback() {
        if (this.getAttribute("debug") !== null) {
            console.log({
                "class": DuplexDiv,
                "event": "adopted"
            })
        }
    }
}

customElements.define("duplex-div", DuplexDiv)
