import React from 'react';
import  {Gingerbreadhouse}  from './Gingerbreadhouse';
import  {gingerbreadhousesApi}  from '../rest/GingerbreadhouseAPI';




export class GingerbreadhousesList extends React.Component {
    state = {
        gingerbreadhouses: []
    };
    componentDidMount() {
        this.fetchGingerbreadhouses();
    }

    fetchGingerbreadhouses = async () => {
        const gingerbreadhouses = await gingerbreadhousesApi.get();
        this.setState({ gingerbreadhouses });
    };

    updateGingerbreadhouse = async (updateGingerbreadhouse) => {
        await gingerbreadhousesApi.put(updateGingerbreadhouse);
        this.fetchGingerbreadhouses();
    };
    render() {
        return (
            <div className="gingerbreadhouse-list">
                {this.state.gingerbreadhouses?.map((gingerbreadhouse) => (
                    <Gingerbreadhouse
                        gingerbreadhouse={gingerbreadhouse}
                        key={gingerbreadhouse._id}
                        updateGingerbreadhouse={this.updateGingerbreadhouse} 
                        />
                     
                ))}
            </div>
        )
    }
}
