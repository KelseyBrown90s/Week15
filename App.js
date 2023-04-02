import React , {Component} from 'react';
import {GingerbreadhousesList} from './Components/GingerbreadhousesList';




class App extends Component{
    render(){
        return (
            <div>
                
                <GingerbreadhousesList />
                //This brings all the components from our other folder together
            </div>
        )
    }
}

export default App;
