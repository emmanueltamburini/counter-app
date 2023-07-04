
export const getImage = async() => {
    try {
        const apiKey = 'oRmo6QL8Cr9DBqfnuGFGAURdkqfnqnPf';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
        return img.src;

    } catch (error) {
        return 'Image not found';
    }
}
