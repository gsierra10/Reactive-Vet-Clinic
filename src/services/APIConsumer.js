import store from "./store"
import { LOG_IN, REGISTER_USER } from "./actions/actionTypes"

export const APIConsumer = {

    loginUser: async (clientData) => {
        try{
            let result = await fetch('http://localhost:5000/clients/login', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: clientData
            })
            result = await result.json()
            localStorage.setItem('token', result.clientData)  
            if (!result.mensaje) {
                store.dispatch({
                    type: LOG_IN,
                    payload: result.clientData
                }) 
            }
        } catch(clientData){
            console.log(clientData)
        }
    },

    registerUser: async (clientData) => {
        try{
            let result = await fetch('http://localhost:5000/clients/register',{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: clientData
        })
        } catch (clientData){
            console.log(clientData)
        }
    },

    // findMovie: async (data) => {
    //     try{
    //         let result = await fetch('http://localhost:5000/movie/',{
    //             method: "GET",
    //             body: data
    //         })
    //     } catch(data){
    //         console.log(data)
    //     }
    // },
    // allMovies: async (data) => {
    //     try{
    //         let res = await fetch('http://localhost:5000/movies',{
    //             method:"GET",
    //         })
    //         res = await res.json(res.data)
    //     }catch(data){
    //         console.log(data)
    //     }
    // },
    // findAllRents: async (data) => {
    //     try{
    //         let result = await fetch('http://localhost:5000/rent/all',{
    //             method: "GET",
    //             body: data
    //         })
    //     } catch(data){
    //         console.log(data)
    //     }
    // }

}

export default APIConsumer