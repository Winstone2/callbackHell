// promises.js

// Assuming you have defined the 'getData' and 'getMoreData' functions
function getData() {
    // Your implementation here
}

function getMoreData(param) {
    // Your implementation here
}

async function fetchData() {
    try {
        const a = await getData();
        const b = await getMoreData(a);
        const c = await getMoreData(b);
        const d = await getMoreData(c);
        const e = await getMoreData(d);

        // Process the final data 'e'
        console.log(e);
    } catch (error) {
        // Handle errors here
        console.error(error);
    }
}

fetchData();
