const log = (item) => console.log(item);

const ping = async (url) => {
    try {
        const pong = await fetch(url);
        const translate = await pong.json();
        const readable = translate.items.map((book) => book.volumeInfo);
        return readable;
    } catch {
        log("hey smthn went wrong");
    }
};

log(
    ping(
        "https://books.googleapis.com/books/v1/volumes?q=i&key=AIzaSyBHpSOm59OrC0rooPnjxfaQSlEO9KSgJWs&maxResults=40"
    )
);
