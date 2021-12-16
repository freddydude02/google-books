const getData = async (url, useStateData, UseStateFunction) => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        UseStateFunction(result.items.map((book) => book.volumeInfo));
        return useStateData;
    } catch {
        console.log("Hey, something went wrong");
    }
};

export default getData;
