import { collection, query, where, getDocs } from "firebase/firestore";
import { database } from "./firebase";

export const handleLogin = async (email, password, navigation) => {
    const queryUser = query(
        collection(database, 'users'), 
        where('email', '==', email)
    )
    const querySp = await getDocs(queryUser)
    querySp.forEach(doc => {
        let usuario = doc.data()
        console.log(usuario);
        if (usuario.email && usuario.password == password) {
            navigation.navigate('Home')
        }
    })
}

export const handleSignIn = async (dados) => {
    
}