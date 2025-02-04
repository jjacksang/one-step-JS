const API_URL = "https://pokemon-api-ecru-eta.vercel.app";

export async function getItemList({ q }) {
    const res = await fetch(`${API_URL}/?search=${q}`);
    try {
        if (res) {
            const data = await res.json();
            return data.data;
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getItemDetail(id) {
    const res = await fetch(`${API_URL}/detail/${id}`);
    try {
        if (res) {
            let data = await res.json();
            return data.data;
        }
    } catch (error) {
        console.log(error);
    }
}
