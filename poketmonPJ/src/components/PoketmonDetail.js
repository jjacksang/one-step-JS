export default function PoketmonDetail() {
    this.$target = document.createElement("div");
    this.$target.className = "poketmon-detail";

    this.template = () => {};

    this.render = () => {};

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };
    this.render();
}
