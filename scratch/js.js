const log = (item) => console.log(item);

const getData = async (url) => {
    try {
        const pong = await fetch(url);
        const translate = await pong.json();
        const readable = translate.items.map((book) => book.volumeInfo);
        return readable.map((book) => book.title);
    } catch {
        log("hey smthn went wrong");
    }
};

log(
    getData(
        "https://books.googleapis.com/books/v1/volumes?q=power rangers&maxResults=40"
    )
);
