import { setPokemonType } from "../modules/typeTag.js";

export default function PoketmonList({
    $app,
    initialState,
    handleItemClick,
    handleTypeClick,
}) {
    console.log(initialState);
    this.state = initialState;
    this.$target = document.createElement("div");
    this.$target.className = "poketmon-list";

    $app.appendChild(this.$target);
    this.handleItemClick = handleItemClick;
    this.handleTypeClick = handleTypeClick;

    this.template = () => {
        let temp = [];
        if (this.state) {
            this.state.forEach((el, index) => {
                temp += `<div class="pokemon-wrapper">
                    <div class="img-wrapper" id="${el.id}">
                        <img src="${el.img}" alt="${el.name}"></img>
                    </div>
                    <div class="pokemon-info">
                        <div class="index">No.${index}</div>
                        <div class="name">${el.name}</div>
                        <div class="type">${setPokemonType(el.type)}</div> 
                    </div>
                </div>`;
            });
        }
        return temp;
    };

    this.render = () => {
        this.$target.innerHTML = this.template();

        this.$target.querySelectorAll("div.type-tag").forEach((el) => {
            el.addEventListener("click", () => {
                this.handleTypeClick(el.id);
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
