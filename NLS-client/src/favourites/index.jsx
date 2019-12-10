import React, { Component } from 'react';
// import addToFavourites from '../utils/services/add-to-favourites'
// import { userInfo } from 'os';
import { getSession } from '../utils/get-session'
//import PluginGenerator from '../utils/plugin-generator'
import PluginGeneratorFavourites from '../utils/plugin-generator-favourites'

class Favourites extends Component {
    constructor() {
        super();
        this.state = { favourites: [] };
        this.id = getSession().id;
    }

    componentDidMount() {
        fetch(`http://localhost:3001/api/user/${this.id}`, { credentials: "include" })
            .then(res => {
                return res.json()
            })
            .then(user => {
                console.log(user[0].favourites)
                this.setState({ favourites: user[0].favourites })

            });
    }

    render() {
        return (

            <div>
                
                {this.state.favourites.map((fbUrl, i) => <PluginGeneratorFavourites fbUrl={fbUrl} key={i} />)}


            </div>
        )
    }
} export default Favourites;

//        {fbUrls.map((fbUrl, i) => <PluginGenerator fbUrl={fbUrl} title={titles[i]} key={i} />)}

// {this.state.favourites.map(favourites =>
//     {favourites.map((favourites.venue, i) => <PluginGenerator fbUrl={favourites.venue} title={titles[i]} key={i} />)}
// <div key={favourites._id}>  Venues: {favourites.venue}  </div>





































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