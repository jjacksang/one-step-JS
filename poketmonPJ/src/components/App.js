import Header from "./Header.js";
import TypeList from "./TypeList.js";
import PoketmonList from "./PoketmonList.js";
import PoketmonDetail from "./PoketmonDetail.js";

import { getPoketmonList } from "./api.js";

export default function App($app) {
    this.state = {
        searchWord: "",
        type: "",
        poketmons: [],
        currentPage: window.location.pathname,
    };

    const header = new Header();
    const typeList = new TypeList();
    const poketmonList = new PoketmonList({
        $app,
        initialState: this.state.initialState,
    });
    const poketmonDetail = new PoketmonDetail({
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
                type: type,
                currentPage: `/${type}`,
            });
        },
    });

    this.setState = (newState) => {
        this.state = newState;
        poketmonList.setState(this.state.poketmons);
    };

    const init = async () => {
        const initialPoketmons = await getPoketmonList(
            this.state.type,
            this.state.searchWord
        );
        this.setState({
            ...this.state,
            poketmons: initialPoketmons,
        });
    };

    init();
}
