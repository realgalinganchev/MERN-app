import { useHistory } from 'react-router-dom';
import { logOut } from '../utils/get-session'
import services from '../utils/services/user-service';
// import { getSession } from '../utils/get-session'

const Logout = () => {
    const history = useHistory();

    services.logout().then((res) => {
        //console.log(res);
        logOut();
        history.push("/");
        window.location.reload();
    }).catch(err => console.log(err))

    return null;
}

export default Logout;