function searchBooks() {
    var scannedText = document.getElementById('scannedText').value;
    var apiKey = 'AIzaSyBcPxDERe4D_nzJAstj0CVaemAXEqOA5PY';
    
    // Construct the API request URL
    var apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + encodeURIComponent(scannedText) + '&key=' + apiKey;

    // Perform a fetch request to the Google Books API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract book title from the API response
            var bookTitle = data.items[0].volumeInfo.title;

            // Display the result on the webpage
            document.getElementById('result').innerText = 'Book Title: ' + bookTitle;
        })
        .catch(error => {
            console.error('Error fetching data from Google Books API:', error);
            document.getElementById('result').innerText = 'Error finding book title. Please try again.';
        });
}
