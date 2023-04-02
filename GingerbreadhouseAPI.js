import { Gingerbreadhouse } from "../Components/Gingerbreadhouse";
const GINGERBREADHOUSES_ENDPOINT='https://6423b98477e7062b3e379858.mockapi.io/api/gingerbread/Gingerbreadhouse';

class GingerbreadhousesApi{
    get=async() =>{
        try{
        const resp = await fetch(GINGERBREADHOUSES_ENDPOINT);
        const data = await resp.json();
        return data;
}catch(e){
    console.log('Oops,looks like fetchHouses had an issue.' , e);
}
    }

    
    put=async(house) => {
        try{
        const resp = await fetch(`${GINGERBREADHOUSES_ENDPOINT}/${Gingerbreadhouse._id}`,{
            method:'PUT',
            headers:{
                'Content Type':'application/json'
            },
            body:JSON.stringify(Gingerbreadhouse)
        });
        return await resp.json();
    
    
}catch(e){
    console.log('Oops,looks like updating Houses had an issue.' , e);
}
}
}
export const gingerbreadhousesApi = new GingerbreadhousesApi();
