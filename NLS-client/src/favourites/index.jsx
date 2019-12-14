import React, { useEffect, useState } from 'react';
import { getSession } from '../utils/get-session'
import IFrameGenerator from '../utils/i-frame-generator'
import './styles.css'
import Image from './background2.jpg';
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
    return (
        <div className="favourites" style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'center', "min-height": "92vh",backgroundSize: 'contain', backgroundRepeat: 'repeat' }}>
            {
                favourites ?
                    <div className="frame">
                        {favourites.map((fbUrl, i) => <IFrameGenerator fbUrl={fbUrl} key={i} />)}
                    </div> :
                    <div>Loading...</div>
            }
        </div>

    )
}

export default Favourites;




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

