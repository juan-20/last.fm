export const load = ({ fetch, params }) => {
    
    const quantity = Number(params.albumCount) * Number(params.albumCount)
    const fetchAlbum = async ( id: string) => {
        const res = await  fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart&user=${id}&api_key=${import.meta.env.VITE_API_KEY}&format=json&limit=${quantity}`);
        const data = await res.json()
        return data
    }
    
    return{
        Album: fetchAlbum(params.userId),
    }

  }
