export default function Header({ $app, initialState, onClick }) {
    this.state = initialState;
    this.onClick = onClick;

    this.$target = document.createElement("div");
    this.$target.className = "header";
    $app.appendChild(this.$target);

    this.template = () => {
        let temp = `<div id='title'>포켓몬 도감</div>`;

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
