const gallery = () => {

    const page = document.querySelector(".gallery");

    const galleryTrack = document.createElement("div")
    galleryTrack.className = "gallery-track";

    let num = 0;

    for ( let i = 0; i < 24; i++) {

        num++;

        const galleryCard = document.createElement("div");
        galleryCard.className = "card";

        const galleryCardWrapper = document.createElement("div");
        galleryCardWrapper.className = "card-image-wrapper";

        const galleryCardImg = document.createElement("img");
        galleryCardImg.src = `https://source.unsplash.com/${images[num]}`;

        galleryCardWrapper.append(galleryCardImg);
        galleryCard.append(galleryCardWrapper);
        galleryTrack.append(galleryCard);
    }

    page.append(galleryTrack);

    const accesKey = "BHMev0wXRyHqojE13-VV7OJmQFRkP1f_GxT3K3z5CA0";
const endPoint = 'https://api.unsplash.com/search/photos';

async function getImages(query){
    let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);
    let jsonResponse = await response.json();
    let imagesList = await jsonResponse.results;

    function createImages(imagesList){

      const page = document.querySelector(".gallery");

      const galleryTrack = document.createElement("div")
      galleryTrack.className = "gallery-track";

      for(let i = 0 ; i < imagesList.length ; i++ ) {

      const galleryCard = document.createElement("div");
      galleryCard.className = "card";

      const galleryCardWrapper = document.createElement("div");
      galleryCardWrapper.className = "card-image-wrapper";

      const image = document.createElement('img');
      image.src = imagesList[i].urls.thumb;
      document.body.appendChild(image);

      galleryCardWrapper.append(image);
      galleryCard.append(galleryCardWrapper);
      galleryTrack.append(galleryCard);
      }  

      page.append(galleryTrack);
  }
  createImages(imagesList);
}

    getImages('sunset');    
}




const Gallery = () => {
    return gallery();
};

export default Gallery;