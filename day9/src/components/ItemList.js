export default function ItemList({ $app, initialState }) {
    this.state = initialState;
    this.$target = document.createElement("div");
    this.$target.className = "content";
    $app.appendChild(this.$target);

    this.template = () => {
        let temp = [];
        if (this.state) {
            this.state.forEach((el) => {
                temp += `<img src="${el.url}"></img>`;
            });
        }
        return temp;
    };

    this.render = () => {};
    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };

    this.render();
}
