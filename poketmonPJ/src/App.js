import Header from "./components/Header.js";
import PoketmonDetail from "./components/PoketmonDetail.js";
import PoketmonList from "./components/PoketmonList.js";

import { getPokemonDetail, getPoketmonList } from "./components/api.js";

export default function App($app) {
    const getSearchWord = () => {
        if (window.location.search.includes("search=")) {
            return window.location.search.split("search=")[1];
        }
        return "";
    };

    this.state = {
        type: "",
        poketmonList: [],
        searchWord: getSearchWord(),
        currentPage: window.location.pathname,
    };

    const renderHeader = () =>
        new Header({
            $app,
            initialState: {
                currentPage: this.state.currentPage,
                searchWord: this.state.searchWord,
            },

            // 헤더 타이틀 클릭 시 홈으로 이동
            handleHomeClick: async () => {
                history.pushState(null, null, `/`);
                const poketmonList = await getPoketmonList();
                this.setState({
                    ...this.state,
                    poketmonList: poketmonList,
                    type: "",
                    searchWord: getSearchWord(),
                    currentPage: "/",
                });
            },

            // 검색어 입력 시 이동
            handleSearchWord: async (searchWord) => {
                history.pushState(null, null, `?search=${searchWord}`);
                const searchPoketmonList = await getPoketmonList(
                    this.state.type,
                    searchWord
                );

                this.setState({
                    ...this.state,
                    searchWord: searchWord,
                    poketmonList: searchPoketmonList,
                    currentPage: `?search=${searchWord}`,
                });
            },
        });

    const renderPoketmonList = () =>
        new PoketmonList({
            $app,
            initialState: this.state.poketmonList,

            // 포켓몬 클릭 시
            handleItemClick: async (id) => {
                history.pushState(null, null, `/detail/${id}`),
                    this.setState({
                        ...this.state,
                        currentPage: `/detail/${id}`,
                    });
            },

            // 포켓몬 타입 클릭 시
            handleTypeClick: async (type) => {
                history.pushState(null, null, `/${type}`);
                const poketmonList = await getPoketmonList(type);
                this.setState({
                    ...this.state,
                    poketmonList: poketmonList,
                    searchWord: getSearchWord(),
                    type: type,
                    currentPage: `/${type}`,
                });
            },
        });

    const renderPoketmonDetails = async (poketmonId) => {
        try {
            const poketmonDetails = await getPokemonDetail(poketmonId);
            new PoketmonDetail({
                $app,
                initialState: poketmonDetails,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const render = async () => {
        const path = this.state.currentPage;
        $app.innerHTML = "";

        // detail을 제외한
        if (!path.startsWith("/detail")) {
            renderHeader();
            renderPoketmonList();
        } else {
            // detail로 이동하였을 때
            const poketmonId = path.split("/detail/")[1];
            renderHeader();
            renderPoketmonDetails(poketmonId);
        }
    };

    this.setState = (newState) => {
        this.state = newState;
        render();
    };

    const init = async () => {
        const path = this.state.currentPage;

        // detail페이지가 아닐 때
        if (!path.startsWith("/detail")) {
            try {
                const initialPoketmonList = await getPoketmonList(
                    this.state.type,
                    this.state.searchWord
                );
                this.setState({
                    ...this.state,
                    poketmonList: initialPoketmonList,
                });
            } catch (error) {
                console.log(error);
            }
        } else {
            render();
        }
    };

    window.addEventListener("popstate", async () => {
        const urlPath = window.location.pathname;
        const prevType = urlPath.replace("/", "");
        const prevSearchWord = getSearchWord();
        const prevPoketmonList = await getPoketmonList(
            prevType,
            prevSearchWord
        );

        this.setState({
            ...this.state,
            type: prevType,
            poketmonList: prevPoketmonList,
            searchWord: prevSearchWord,
            currentPage: urlPath,
        });
    });

    init();
}
