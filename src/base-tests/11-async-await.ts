
export const getImage = async() => {
    try {
        const apiKey = 'oRmo6QL8Cr9DBqfnuGFGAURdkqfnqnPf';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 
        console.log('=== 11-async-await.ts [7] ===', data);

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    } catch (error) {
        return 'Image not found';
    }
}
