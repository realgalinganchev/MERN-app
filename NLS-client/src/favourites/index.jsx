import React, { useEffect, useState } from 'react';
import { getSession } from '../utils/get-session'

const Favourites = () => {

    let [favourites, setFavourites] = useState(null);
    const id = getSession().id;

    useEffect(() => {
        fetch(`http://localhost:3001/api/user/${id}`, { credentials: "include" })
            .then(res => {
                return res.json()
            })
            .then(user => {
                setFavourites(user[0].favourites)
            });


    }, [id])
    //console.log(favourites)
    return (
        
        favourites ?
            <div>
                {favourites.map((fbUrl, i) => <IFrameGenerator fbUrl={fbUrl} key={i} />)}
            </div> :
            <div>Loading...</div>


    )
}

export default Favourites;

const IFrameGenerator = ({ fbUrl }) => {
    const name = fbUrl.slice(25);
    //console.log(name);
    return (<iframe title={name} src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${name}&tabs=events&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1437988429703898`} width="340" height="500" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>)
}












// class Favourites extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { favourites: [] };
//         this.id = getSession().id;
//         this.counter = 0;
//     }

//     componentDidMount() {

//         fetch(`http://localhost:3001/api/user/${this.id}`, { credentials: "include" })
//             .then(res => {
//                 return res.json()
//             })
//             .then(user => {
//                 this.setState({ favourites: user[0].favourites })
//             });

//     }



// render() {

//     return (
//         <div>
//             {this.state.favourites.map((fbUrl, i) => <PluginGeneratorFavourites fbUrl={fbUrl} key={i} />)}
//         </div>
//     )
// }
// } export default Favourites;

