export default function PoketmonList({ $app, initialState }) {
    this.state = initialState;
    this.$target = document.createElement("div");
    this.$target.className = "poketmon-list";

    $app.appendChild(this.$target);

    this.template = () => {
        let temp = `<div class="poketmon-container>`;
        if (this.state) {
            console.log(this.state);
            this.state.forEach((el, index) => {
                temp += `
                <div class="poketmon-item" id=${el.name}>
                    <div class="img-wrapper" id=${el.name}>
                        <img src=${el.img} alt=${el.description}></img>
                    </div>
                    <div class="poketmon-info">
                        <div class="item-count">No.${index}</div>
                        <div class="poketmon-name">${el.name}</div>
                        <div class="poketmon-type">${el.type.map((el) => el)}</div>
                    </div>
                </div>`;
            });
            temp += `</div>`;
        }
        return temp;
    };

    this.render = () => {
        this.$target.innerHTML = this.template();
    };

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };
    this.render();
}
