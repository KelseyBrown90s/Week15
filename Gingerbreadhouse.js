import React from 'react';
import  {NewRoomForm}  from './NewRoomForm';




export const Gingerbreadhouse = (props) =>{
    const{gingerbreadhouse,updateGingerbreadhouse} = props;

    const deleteRoom =(roomId) =>{
        const updateGingerbreadhouse = {
            ...gingerbreadhouse,
            rooms:gingerbreadhouse.rooms.filter((x)=> x._id !== roomId)
        };
        updateGingerbreadhouse(updateGingerbreadhouse);
    }

const addNewRoom = (room) =>  updateGingerbreadhouse({...gingerbreadhouse,rooms:[...gingerbreadhouse.rooms,room]})
    
const rooms =() => {
    <ul>
        {Gingerbreadhouse.rooms.map((room,index)=>(
            <li key={index}>
                <label>{`${room.name} Area:${room.area}`}</label>
                <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
            </li>
        ))}
    </ul>
};
return(
    <div>
        <h1>{gingerbreadhouse.name}</h1>
        {
            rooms({rooms,gingerbreadhouseId:gingerbreadhouse._id,deleteRoom})
        }
        <NewRoomForm addNewRoom={addNewRoom}/>
    </div>
);

};