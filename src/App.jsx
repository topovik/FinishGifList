import React, { Component } from 'react'
import GifList from './components/GifList'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'

class App extends Component {
    render() {
        return(
            <section>
                <Header />
                <Switch>
                    <Route path='/gifs' component={GifList} />
                    <Route path="/about" component={About} />
                </Switch>
            </section>
        )
    }
}

export default App