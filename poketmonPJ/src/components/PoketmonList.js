export default function PoketmonList() {
    this.$target = document.createElement("div");
    this.$target.className = "poketmon";

    this.template = () => {};

    this.render = () => {};

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };
    this.render();
}
