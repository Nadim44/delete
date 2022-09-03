// const displayNewHeading = headings => {
//     // console.log(headings)
//     const newsContainer = document.getElementById('news-container')
//     newsContainer.innerHTML = ''
//     for (const heading of headings) {
//         const newsTitle = document.createElement('a')
//         newsTitle.innerHTML = `
//         <a onclick="newsFeeds('${category_id}')" class="nav-link">${heading.category_name}</a>
//         `;
//         newsContainer.append(newsTitle)

//     }

// }
// const loadNewsHeading = () => {
//     // console.log('add')
//     fetch('https://openapi.programming-hero.com/api/news/categories')
//         .then(res => res.json())
//         .then(data => displayNewHeading(data.data.news_category))

// }

// const newsFeeds = async (category_id) => {
//     // const url = `https://openapi.programming-hero.com/api/news/category/01`;
//     const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displayNews(data.data)
// }

// const displayNews = (allNews) => {
//     // console.log(allNews)
//     const newsPartContainer = document.getElementById('news-part')
//     // newsPart.createElement = ('div')
//     newsPartContainer.innerHTML = ''
//     for (const news of allNews) {
//         console.log(news)
//         // const newsPartContainer = document.getElementById('news-part')
//         // // newsPart.createElement = ('div')
//         // newsPartContainer.innerHTML = ''
//         const newsPart = document.createElement('div')
//         newsPart.innerHTML = `
//         <div class="d-flex border border-dark ">
//                 <div class="card">
//                     <img src="${news.thumbnail_url}" alt="...">
//                 </div>
//                 <div class="card-body">
//                     <h5 class="card-title">${news.title}</h5>
//                     <h5 class="card-title">${news.total_view}</h5>
//                     <p class="card-text">This is a longer card with supporting text below as a natural lead-in
//                         to additional content. This content is a little bit longer.</p>
//                 </div>

//             </div>

//         `;
//         newsPartContainer.appendChild(newsPart)
//     }


// }






const loadNewsHeading = () => {
    // console.log('add')
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayNewHeading(data.data.news_category))

}
const displayNewHeading = headings => {
    // console.log(headings)
    const newsContainer = document.getElementById('news-container')
    newsContainer.innerHTML = ''
    for (const heading of headings) {
        const newsTitle = document.createElement('a')
        newsTitle.innerHTML = `
        <a onclick="newsFeeds('${heading.category_id}')" class="nav-link">${heading.category_name}</a>
        `;
        newsContainer.append(newsTitle)

    }

}
const newsFeeds = async (categoryId) => {
    // const url = `https://openapi.programming-hero.com/api/news/category/01`;
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data)
}

const displayNews = (allNews) => {
    // console.log(allNews)
    const newsPartContainer = document.getElementById('news-part')
    newsPartContainer.innerHTML = ''
    for (const news of allNews) {
        console.log(news)
        const newsPart = document.createElement('div')
        newsPart.innerHTML = `
        <div class="d-flex border border-dark ">
                <div class="card">
                    <img src="${news.thumbnail_url}" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <h5 class="card-title">${news.total_view}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.</p>
                </div>

            </div>

        `;
        newsPartContainer.appendChild(newsPart)
    }


}


// newsFeeds()




/* <div class="row g-0 card mb-3 ">
                    <div class="col-md-4">
                        <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${news.title}</h5>
                            <h5 class="card-title">${news.total_view}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
         </div> */




// document.getElementById('news-details').addEventListener('click', function () {
//     console.log('clicked')
// })




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

// const newsFeeds = (category_id) => {

//     const url = `https://openapi.programming-hero.com/api/news/category/{category_id}`;
//     // const url = `https://openapi.programming-hero.com/api/news/category/01`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayNews(data.data))
// }



// 