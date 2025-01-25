// function fakeApiCall() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ name: "John Doe", age: 30 });
//         }, 2000);
//     });
// }

// async function fetchUserData() {
//     try {
//         const data = await fakeApiCall();
//         console.log(`이름 : ${data.name}`);
//     } catch {
//         console.log("Data fetching Failed");
//     }
// }

// fetchUserData();

const API_URL = "https://pokemon-api-ecru-eta.vercel.app";

async function fetchPoketmons() {
    try {
        let response = await fetch(API_URL);
        let data = await response.json();
        const allPoketmon = data.data;
        const greenPoketmon = allPoketmon.filter((el) => el.color === "green");
        console.log(greenPoketmon);
    } catch (error) {
        console.error("Fetch Failed", error);
    }
}

fetchPoketmons();
