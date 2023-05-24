// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;


export const load = ({ fetch, params }) => {
    console.log(params);

    const fetchAlbum = async ( id: string) => {
        const res = await  fetch(`http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${id}&api_key=${import.meta.env.VITE_API_KEY}&format=json`);
        const data = await res.json()
        return data
    }

    return{
        Album: fetchAlbum(params.userId)
    }
  }
