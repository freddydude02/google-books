const getData = async (name) => {
    try {
        const response = await fetch(
            "https://books.googleapis.com/books/v1/volumes?q=" +
                name +
                "&maxResults=40"
        );
        const result = await response.json();
        const json = result.items.map((book) => book.volumeInfo);
        return json;
    } catch {
        console.log("Hey, something went wrong");
    }
};

export default getData;
