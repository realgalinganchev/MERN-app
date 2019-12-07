import { useHistory } from 'react-router-dom';
import services from '../utils/services/user-service';

const Logout = () => {
    const history = useHistory();

    services.logout().then((res) => {
        console.log(res);
        history.push("/");
    }).catch(err => console.log(err))

    return null;
}

export default Logout;