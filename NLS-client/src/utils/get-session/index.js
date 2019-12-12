
import Cookies from 'js-cookie'


export const getSession = () => {
    const jwt = Cookies.get('x-auth-token');
      //console.log(jwt);
    let session = null;
    try {
        if (jwt) {
            const base64Url = jwt.split('.')[1]
            const base64 = base64Url.replace('-', '+').replace('_', '/')
            // what is window.atob ?
            // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob
            session = JSON.parse(window.atob(base64))
            //console.log(session);
        }
    } catch (error) {
        console.log(error)
    }
    //console.log(session);
    return session
}
export const logOut = () => {
    Cookies.remove('x-auth-token')
}