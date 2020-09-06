import {AddUser,Login} from './Usertypes'

const initialState = {
    users:[
    {username:"lamichhanemanoj1@gmail.com",password:"Inspiron@11"},
    ],
}

export const UserReducer = (state=initialState,action) => {
    
    switch(action.type){

        case AddUser:{       
            return{
                ...state,
                users:[...state.users,action.user],
            }           
        }
        case Login:{
            return{
                ...state,
            }
        }
        default:{
            return{
                ...state,
            }
        }
    }
}