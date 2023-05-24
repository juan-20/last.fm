export const load = ({ fetch, params }) => {
    console.log(params);

    const fetchAlbum = async ( id: string) => {
        const res = await  fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${id}&api_key=${import.meta.env.VITE_API_KEY}&format=json`);
        const data = await res.json()
        return data
    }

    return{
        Album: fetchAlbum(params.userId)
    }
  }
