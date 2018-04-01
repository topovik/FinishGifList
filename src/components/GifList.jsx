import React, { Component } from 'react'
import Gif from './Gif'
import { connect } from 'react-redux'
import { loadGifs } from '../actions'

class GifList extends Component {

    componentDidMount() {
        this.props.load();
      }

    render() {
        if (this.props.status === 'LOADING')
            return (<p>Loading</p>);
        if (this.props.status === 'ERROR')
            return (<p>ERROR</p>);

        const list = this.props.gifs.map(gif => {
            return <Gif url={gif.url} title={gif.title} key={gif.id}/>
        })

        return(
            <section>
                <h1>Trends</h1>
                { list }
            </section>            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gifs: state.gifs,
        status: state.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => dispatch(loadGifs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GifList)