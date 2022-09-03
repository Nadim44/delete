
const loadNewsHeading = () => {
    // console.log('add')
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayNewHeading(data.data.news_category))

}
const displayNewHeading = headings => {
    // console.log(headings)

    for (const heading of headings) {
        // console.log(heading.category_name)
        const newsContainer = document.getElementById('news-container')
        const newTitle = document.createElement('a')
        newTitle.innerHTML = `
        <a class="nav-link" href="#">${heading.category_name}</a>
        `;
        newsContainer.appendChild(newTitle)
    }

}

// const loadQuote = () => {
//     // fetch('https://api.kanye.rest/')
//     fetch('https://openapi.programming-hero.com/api/news/categories')
//         .then(res => res.json())
//         .then(data => displayQuote(data.data.news_category))
// }

// const displayQuote = headings => {
//     // const blockQuote = document.getElementById('quote');
//     // console.log(quote)
//     // blockQuote.innerText = quote.quote
//     for (const heading of headings) {
//         console.log(heading.category_name)
//     }

// }

