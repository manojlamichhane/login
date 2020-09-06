import {AddUser,Login} from './Usertypes'

export const ADDUSER = (user) => {
    return{
    type:AddUser,
    user
    }
}
export const LOGIN = (user) => {
return{
    type:Login,
    user
}
}