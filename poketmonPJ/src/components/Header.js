export default function Header({
    $app,
    initialState,
    handleSearchWord,
    handleHomeClick,
}) {
    this.state = initialState;
    this.$target = document.createElement("div");
    this.$target.className = "header";

    $app.appendChild(this.$target);
    this.handleSearchWord = handleSearchWord;
    this.handleHomeClick = handleHomeClick;

    this.template = () => {
        const { searchWord, currentPage } = this.state;
        console.log(currentPage);
        let temp = `
        <!-- Header -->    
        <div class='header-content' id="title">
            <img src='/src/img/ball.webp' width=40px height=40px />
        포켓몬 도감</div>`;

        if (!currentPage.includes("/detail")) {
            temp += `
            <!-- Main -->
            <div class="search">
                <input type="text" placeholder="포켓몬을 검색하세요!" id="search" autocomplete="off" 
                value=${searchWord}></input>
                <button id="search-button"><img src="/src/img/search.png" /></button>
            </div>`;
        }
        return temp;
    };

    this.render = () => {
        this.$target.innerHTML = this.template();
        const $titleImg = document.getElementById("title");

        // Title icon 클릭 시
        $titleImg.addEventListener("click", () => {
            this.handleHomeClick();
        });

        if (!this.state.currentPage.includes("/detail")) {
            const $searchInput = document.getElementById("search");
            const $searchButton = document.getElementById("search-button");

            // Enter키 입력 시
            $searchInput.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    this.handleSearchWord($searchInput.value);
                }
            });

            // Button 클릭 시
            $searchButton.addEventListener("click", () => {
                this.handleSearchWord($searchInput.value);
            });
        }
    };

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };
    this.render();
}
