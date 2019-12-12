
import { getSession } from '../../get-session'


const AddToFavourites = {


    updateFavourites: function (data) {

        const id = getSession().id;

            return fetch(`http://localhost:3001/api/user/${id}`, {
                body: JSON.stringify(data),
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                credentials: 'include'
            }).then(res => res.status === 200 ? res.json() : Promise.reject(res.status))
    }
};
export default AddToFavourites;


