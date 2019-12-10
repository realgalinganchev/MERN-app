


const AddToFavourites = {
    get: function () {

        return fetch(`http://localhost:3001/api/favourites`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.status);
    },
    
    post: function (data) {
      return fetch(`http://localhost:3001/api/user`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include'
      }).then(res => res.status === 200 ? res.json() : Promise.reject(res.status))
    }
}
 
export default AddToFavourites;