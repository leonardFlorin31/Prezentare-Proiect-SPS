const blogTitleField = document.querySelector('.title');
const articleField = document.querySelector('.article');

const bannerImage = document.querySelector('#banner-upload');
const banner = document.querySelector(".banner");
let bannerPath;

const publishButton = document.querySelector('.button.dark.publish');
const uploadInput = document.querySelector('#image-upload');

// Eveniment pentru încarcarea imaginii banner
bannerImage.addEventListener('change', () =>{
    uploadImage(bannerImage, "banner");
})

const uploadImage = (uploadFile, unloadType) => {
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
            bannerPath = `${location.origin}/${data}`;
            banner.style.backgroundImage = `url("${bannerPath}")`;
        })
    }
}