function tambahTweet() {
    let tweet = document.querySelector('#tweet').value;

    for (let i = 0; i < tweet.length; i++) {
        document.write(tweet[i]);
    }
}