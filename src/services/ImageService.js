async function getImages() {
    let promises = []
    let images = []
    for(let i=0; i<= 10; i++) {
        promises.push(fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then((result) => {
            let urlExt = (result.url).split(".");
            if (urlExt[urlExt.length -1] !== "mp4" && urlExt[urlExt.length -1] !== "webm"){
                images.push(result);
            } 
        }))
    }
    await Promise.all(promises)
    return images;
}

export function getImage() {
       return getImages()
    }
