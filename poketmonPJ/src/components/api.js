const API_URL = "https://pokemon-api-ecru-eta.vercel.app";

export const getPoketmonList = async (startIdx, type, sortBy, searchWord) => {
    try {
        let url = `${API_URL}`;
        if (type && type !== "All") {
            url += `${type}`;
        }
        if (searchWord) {
            url += `?search=${searchWord}`;
        }

        const res = await fetch(url);
        if (res) {
            let data = await res.json();
            return data.data;
        }
    } catch (error) {
        console.log(error);
    }
};
