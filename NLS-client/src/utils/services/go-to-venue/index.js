

const GoToVenue = {

///to be done
    goVenue: function (data) {
        
        return fetch(`http://localhost:3001/api/venues/fbUrl`, {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.status === 200 ? res.json() : Promise.reject(res.status))
    },
    showVenue: function (data ) {
        return fetch(`http://localhost:3001/api/venues/id`, {
          body: JSON.stringify(data),
          method: 'POST',
          headers: {
              'Content-type': 'application/json'
          }
      }).then(res => res.status === 200 ? res.json() : Promise.reject(res.status))
    },

};
export default GoToVenue;

//`http://localhost:3001/api/venues/${id}`