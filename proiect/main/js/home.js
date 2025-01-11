import { db } from './firebase.js';
import { collection, doc, getDocs } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js';


const blogSection = document.querySelector('.blogs-section');

// Creează o referință la colecția "blogs"
const blogCollection = collection(db, "blogs");

// Obține documentele din colecția "blogs"
getDocs(blogCollection).then((querySnapshot) => {
    querySnapshot.forEach((blog) => {
        if (blog.id !== decodeURI(location.pathname.split("/").pop())) {
            createBlog(blog);
        }
    });
}).catch((error) => {
    console.error("Eroare la obținerea documentelor:", error);
});


const createBlog = (blog) => {
    let data = blog.data();
    blogSection.innerHTML +=`<div class="blog-card">
            <img src="${data.bannerImage}" class="blog-image" alt="">
            <h1 class="blog-title">${data.title.substring(0, 200) + ''}</h1>
            <p class="blog-overview">${data.article.substring(0, 20) + '...'}</p>
            <a href="/${blog.id}" class="button dark">citeste mai mult</a>
            </div>`;
}