async function fetchData() {
    try {
        const a = await getData();
        const b = await getMoreData(a);
        const c = await getMoreData(b);
        const d = await getMoreData(c);
        const e = await getMoreData(d);

        // Process the final data 'e'
    } catch (error) {
        // Handle errors here
    }
}

fetchData();
