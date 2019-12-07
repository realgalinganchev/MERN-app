import React, { Component } from 'react';
//import logo from './logo.svg';
// import './App.css';

class Favourites extends Component {
   constructor(){
       super();
       this.state ={favourites: []};
   }
   componentDidMount() {
          fetch('http://localhost:3001/api/favourites')
            .then(res => {
                //console.log(res);
                return res.json()
             })
            .then(favourites => { 
                //console.log(users); 
                this.setState({ favourites })
             });
         }
   render() {
        return (
            <div>
        
                {this.state.favourites.map(favourites =>
                <div key={favourites._id}>Venue: {favourites.venue} User: {favourites.creator}</div>
              )}
            </div>
        );
    }
}export default Favourites;










































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