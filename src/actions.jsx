const GIF_LOADING = 'GIF_LOADING'
const GIF_ERROR = 'GIF_ERROR'
const GIF_SUCCESS = 'GIF_SUCCESS'

const loading = () => ({type: GIF_LOADING})
const error = () => ({type: GIF_ERROR})
const loaded = (gifs) => ({type: GIF_SUCCESS, gifs})

export const loadGifs = () => {
    return (dispatch) => {
        dispatch(loading());
        fetch('http://api.giphy.com/v1/gifs/trending?api_key=CpAF0AM2qwD9R5zJj9tsM7gBQOEpWRBO&limit=8')
            .then(response => response.json())
            .then(objects => objects.data.map(t => ({
                id: t.id,
                title: t.title,
                url: t.images.fixed_width_downsampled.url
            })))
            .then(gifs => dispatch(loaded(gifs)))
            .catch(() => dispatch(error()))
    }           
}