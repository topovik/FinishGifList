export default (state, action) => {
    switch(action.type) {
        case 'GIF_LOADING':
            return {...state, status: 'LOADING'}

        case 'GIF_ERROR':
            return {...state, status: 'ERROR'}
            
        case 'GIF_SUCCESS':
            return {...state, gifs: action.gifs, status: 'SUCCESS'}
            
        default:
            return state    
    }
}