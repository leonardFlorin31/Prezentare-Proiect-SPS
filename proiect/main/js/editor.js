import { db } from './firebase.js';
import { collection, doc, setDoc } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js';

const blogTitleField = document.querySelector('.title');
const articleField = document.querySelector('.article');

const bannerImage = document.querySelector('#banner-upload');
const banner = document.querySelector(".banner");
let bannerPath;

const publishButton = document.querySelector('.button.dark.publish');
const uploadInput = document.querySelector('#image-upload');

// Eveniment pentru încarcarea imaginii/banner
bannerImage.addEventListener('change', () =>{
    uploadImage(bannerImage, "banner");
})

uploadInput.addEventListener('change', () => {
    uploadImage(uploadInput, "image");
})

const uploadImage = (uploadFile, uploadType) => {
    const [file] = uploadFile.files;
    //conditie sa fie doar imagine uploadata
    if(file && file.type.includes("image")){
        const formdata = new FormData();
        formdata.append('image', file);

        fetch('/upload', {
            method: 'post',
            body: formdata
        }).then(res => res.json())
        .then(data =>{
            if(uploadType == "image"){
                addImage(data, file.name);
            }else {
                bannerPath = `${location.origin}/${data}`;
                banner.style.backgroundImage = `url("${bannerPath}")`;
            }
            
        })
    } else{
        alert("upload Image only");
    }
}

const addImage = (imagepath, alt) => {
    let cursorPosition = articleField.selectionStart;
    let textToInsert = `\r![${alt}](${imagepath})\r`;
    articleField.value = articleField.value.slice(0, cursorPosition) + textToInsert + 
    articleField.value.slice(cursorPosition);

}

let months = ["ian", "feb", "mar", "apr", "mai", "iun", "iul", "aug", "sep", "oct", "noi", "dec"];

publishButton.addEventListener('click', () => {
    if (articleField.value.length && blogTitleField.value.length) {
        // Generare id unic
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        let blogTitle = blogTitleField.value.split(" ").join("-");
        let id = '';
        for (let i = 0; i < 4; i++) {
            id += letters[Math.floor(Math.random() * letters.length)];
        }

        let docName = `${blogTitle}-${id}`;
        let date = new Date(); // Data de publicare

        // Accesam colectia "blogs" și adaugam documentul
        const blogsCollection = collection(db, "blogs");
        const newDocRef = doc(blogsCollection, docName);  // Creăm o referință către documentul nostru
        
        // Setam datele documentului
        setDoc(newDocRef, {
            title: blogTitleField.value,
            article: articleField.value,
            bannerImage: bannerPath,
            publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
        })
        .then(() => {
            //console.log('Data adaugata cu succes');
            location.href = `/${docName}`;
        })
        .catch((err) => {
            console.error('Eroare la adaugarea documentului:', err);
        });
    } else {
        alert("Te rog completeaza toate campurile inainte de a publica.");
    }
});