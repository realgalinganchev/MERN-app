import React, { Component } from 'react';
// import addToFavourites from '../utils/services/add-to-favourites'
// import { userInfo } from 'os';
import { getSession } from '../utils/get-session'

class Favourites extends Component {
    constructor() {
        super();
        this.state = { favourites: [] };
        this.id = getSession().id;
    }

    componentDidMount() {
        fetch(`http://localhost:3001/api/user/${this.id}`, {credentials : "include"})
            .then(res => {
                return res.json()
            })
            .then(user => {
               // console.log(user[0].favourites);
                this.setState({ favourites : user[0].favourites })
            });
    }

    render() {
        return (
            <div>

                {this.state.favourites.map(favourites =>
                    <div key={favourites._id}>  Venues: {favourites.venue}  </div>
                )}
            </div>
        );
    }
} export default Favourites;










































// import React from 'react'
// import './styles.css'
// import postService from './../utils/services/post-service'


// class Profile extends React.Component {
//     state = {
//         users: []
//     };

//     componentDidMount() {
//         postService.load().then(favourites => {
//             this.setState({ favourites });
//         })
//     }
//     render() {
//         const { users } = this.state;
//         //console.log(favourites);

//         return <div>
//             {users}
//         </div>

//     }
// }

// export default Profile;

// export default function Profile(){
//     return <div>
//         Profile 
//     </div>
// }

// {posts.map((post) => {
//     <Post key={post.id} imageUrl="" imageAlt="alt" author="userId">{post.body}</Post>
// })}

// const { favourites } = this.state;

// return favourites ? <div>
// {favourites.map((favourite) => 
//       <div key={favourite._id} creator={favourite.creator}>{favourite.body}</div>
//     )}
// </div> : <div>Loading...</div>