
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
    headings.forEach(heading => {
        const newsTitle = document.createElement('a')
        newsTitle.innerHTML = `
        <a onclick="newsFeeds('${heading.category_id}')" class="nav-link">${heading.category_name}</a>
        `;
        newsContainer.append(newsTitle)

    });
};

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
    newsPartContainer.innerHTML = '';
    allNews.forEach(news => {
        // console.log(news)
        const newsPart = document.createElement('div')
        newsPart.innerHTML = `
        <div class="d-flex border border-dark ">
                <div class="card img-fluid">
                    <img src="${news.thumbnail_url}" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text ">${news.details.slice(0, 150) + "..."}</p>
                    <div class="d-flex" > 
                      <div class="card img-fluid" > 
                         <img style="height: 25px; width:25px" class="rounded-circle" src="${news.author.img}" alt="...">
                      </div>
                      <div class="d-flex mx-auto">
                        <h3 class="mx-3 fs-6">${news.author.name === null ? 'no data found' : news.author.name} </h3>
                       <span> <i class="fa-solid fa-eye"></i></span>
                        <h3 class="mx-2 fs-6">${news.total_view == null ? 'no view' : news.total_view} </h3>
                    
                        <button onclick="newsDetailsModal()" class="btn btn-primary mx-4 fs-6" data-bs-toggle="modal" data-bs-target="#newsDetailsModal">Details</button>

                       </div> 
                    </div> 
                </div>
            </div>
        `;
        newsPartContainer.appendChild(newsPart)
    });

}

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none')
    }
}


const questionBlog = () => {
    const questionBlog = document.getElementById('question-blog')
    questionBlog.innerHTML = ''
    // console.log('add')
    const blog = document.createElement('div')
    blog.innerHTML = `
     <div class='mx-4'>
        <h5>1. Difference between var, let and const?</h5>
        <p>Answer: var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared. </p>
  </div>
     <div class='mx-4'>
        <h5>2. Difference between Arrow function and Regular function?</h5>
        <p>Answer: Inside of a regular JavaScript function, this value is dynamic. The dynamic context means that the value of this depends on how the function is invoked. In JavaScript, there are 4 ways you can invoke a regular function.
        </p>
    </div>
     <div class='mx-4'>
        <h5>3. Difference between Arrow function and Regular function?</h5>
        <p>Answer: Template literals are a new feature introduced in ECMAScript 2015/ ES6. It provides an easy way to create multiline strings and perform string interpolation. Template literals are the string literals and allow embedded expressions. Before ES6, template literals were called as template strings.
        </p?
    </div>
    
    `
    questionBlog.appendChild(blog);
};




const newsDetailsModal = async (id) => {
    const url = `https://openapi.programming-hero.com/api/news/${id}`
    // const url = `https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a`
    const res = await fetch(url)
    const data = await res.json();
    displayDetailsModal(data.data)
}
const displayDetailsModal = (newsAll) => {
    console.log(newsAll)
    const newsDetailsModalLabel = document.getElementById('newsDetailsModalLabel')
    for (const news of newsAll) {
        console.log(news)
        const newsDiv = document.createElement('div')
        newsDiv.appendChild = `
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="newsDetailsModalLabel">${news.author.name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                </div>
            </div>
        </div>
            `;
        newsDetailsModalLabel.appendChild(newsDiv)
    }
}

// newsDetailsModal()

