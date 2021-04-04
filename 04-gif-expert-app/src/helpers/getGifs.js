export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=iwpuLCFlLwwvYuHTISV8CrwWFLSNz8Ox`;

    const result = await fetch(url);

    const {data} = await result.json();

    const gifs = data.map(img => {
        return {

            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url, // Con el ? indicamos que si viene la colección images trae la data
        }
    })

    return gifs;
}
