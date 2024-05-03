import { collection, query, where, getDocs } from "firebase/firestore";
import { database } from "./firebase";

export const handleLogin = async (email, password, navigation) => {
    axios({
        method: 'POST',
        url: `${baseUrl}/login`,  
        data: {
            email,
            password
        }
    }).then((response)=> { 
        let token = response.data.token
        if(token){
            _storeData('token', token)
            navigation.navigate('Dashboard')
        }else{
            console.error('Houve um erro ao tentar fazer login')
        }
    })
}

export const handleSignIn = async (email, password, navigation) => {
    
}