import Header from "./components/Header.js";
import ItemList from "./components/ItemList.js";
import ItemDetail from "./components/ItemDetail.js";

import { getItemList, getItemDetail } from "./components/api.js";

export default function App($app) {
    this.state = {
        type: "",
        items: [],
        q: "all",
        currentPage: "",
    };

    const header = new Header({
        $app,
        initialState: "",
        onClick: async (q) => {
            this.setState({
                ...this.state,
                q: await getItemList(q === "all" ? "" : q),
            });
        },
    });

    const itemList = new ItemList({ $app, initialState: [] });

    this.setState = (newState) => {
        this.state = newState;
        items.setState(this.state.items);
    };

    const init = async () => {
        try {
        } catch (error) {
            console.log(error);
        }
    };
}
