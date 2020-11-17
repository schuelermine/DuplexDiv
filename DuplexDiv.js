class DuplexDiv extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const α = this.attachShadow({mode: "open"});
        
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
        this.observer.observe(this, {subtree: true, childList: true, attributes: true})

        const ξ = () => {
            window.removeEventListener("DOMContentLoaded", ξ);
            this.render();
        }
        window.addEventListener("DOMContentLoaded", ξ);

        console.log("DuplexDiv: connected");
    }

    disconnectedCallback() {
        console.log("DuplexDiv: disconnected");
    }

    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(_name, _oldvalue, _newvalue) {
        // pass
    }

    adoptedCallback() {
        console.log("DuplexDiv: adopted");
    }

    render() {
        while (this.divElement1.firstChild) {
            this.divElement1.removeChild(this.divElement1.lastChild);
        }
        this.slotElement.assignedNodes().forEach(ω => {
            this.divElement1.append(ω.cloneNode(true))
        });
    }
}

customElements.define("duplex-div", DuplexDiv)
