const API_URL = "https://pokemon-api-ecru-eta.vercel.app/";

// 포켓몬 전체 데이터
export const getPoketmonList = async (type, searchWord) => {
    let url = API_URL;
    if (type) {
        url += `${type}`;
    }
    if (searchWord) {
        url += `?search=${searchWord}`;
    }
    const res = await fetch(url);
    const poketmonList = await res.json();
    return poketmonList.data;
};

// 포켓몬 상세 데이터
export const getPokemonDetail = async (id) => {
    const url = API_URL + "detail/" + id;
    const res = await fetch(url);
    const poketmonDetails = await res.json();
    return poketmonDetails.data;
};
