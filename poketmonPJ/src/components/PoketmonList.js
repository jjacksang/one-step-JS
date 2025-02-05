import { setPokemonType } from "../modules/typeTag.js";

export default function PoketmonList({
    $app,
    initialState,
    handleItemClick,
    handleTypeClick,
}) {
    this.state = initialState;
    this.$target = document.createElement("div");
    this.$target.className = "poketmon-list";

    $app.appendChild(this.$target);
    this.handleItemClick = handleItemClick;
    this.handleTypeClick = handleTypeClick;

    this.template = () => {
        let temp = `<div class="poketmon-container>`;
        if (this.state) {
            console.log(this.state);
            this.state.forEach((el, index) => {
                temp += `
                <div class="poketmon-item" id=${el.name}>
                    <div class="img-wrapper" id=${el.id}>
                        <img src=${el.img} alt=${el.name}></img>
                    </div>
                    <div class="poketmon-info">
                        <div class="item-count">No.${index}</div>
                        <div class="poketmon-name">${el.name}</div>
                        <div class="poketmon-type">${setPokemonType(el.type)}</div>
                    </div>
                </div>`;
            });
            temp += `</div>`;
        }
        return temp;
    };

    this.render = () => {
        this.$target.innerHTML = this.template();

        this.$target.querySelectorAll("div.img-wrapper").forEach((el) => {
            el.addEventListener("click", () => {
                this.handleItemClick(el.id);
            });
        });

        this.$target.querySelectorAll("div.img-wrapper").forEach((el) => {
            el.addEventListener("click", () => {
                this.handleItemClick(el.id);
            });
        });
    };

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };
    this.render();
}
