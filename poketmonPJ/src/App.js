import Header from "./components/Header.js";
import PoketmonList from "./components/PoketmonList.js";

import { getPoketmonList } from "./components/api.js";

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

    const header = new Header({
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
            history.pushState(null, null, `/?search=${this.state.searchWord}`);
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

    const poketmonList = new PoketmonList({
        $app,
        initialState: this.state.poketmonList,
        handleItemClick: async (id) => {
            history.pushState(null, null, `/detail/${id}`),
                this.setState({
                    ...this.state,
                    currentPage: `/detail/${id}`,
                });
        },
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

    this.setState = (newState) => {
        this.state = newState;
        header.setState({
            searchWord: this.state.searchWord,
            currentPage: this.state.currentPage,
        });
        poketmonList.setState(this.state.poketmonList);
    };

    const init = async () => {
        try {
            const initialPoketmonList = await getPoketmonList();
            this.setState({
                ...this.state,
                poketmonList: initialPoketmonList,
            });
        } catch (error) {
            console.log(error);
        }
    };

    init();
}
