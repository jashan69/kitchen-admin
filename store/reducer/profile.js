import Kyc from "../../model/Kyc"
import Profile from "../../model/Profile"
import { ADD_CUISINE, UPDATE_ACC,SIGNUP_ACCOUNT, ADD_KYC } from "../action/profile"

const initialState = {

    kyc:[],
    cuisine:[],
    chef:[],
    name:null,
    number:null,
    email:null,
    kycStatus:false,
    created:false,
    profileId:null,
    uid:null,
    token:null

}

export default (state = initialState, action) => {

    switch(action.type){
        case ADD_CUISINE:
            
            const cuisine = state.cuisine
            const status = cuisine.includes(action.name)
            console.log('status', status, cuisine)

            if(status){

                return{
                    ...state,
                    cuisine:cuisine.filter(x=> x != action.name)
                }
            }else{
                console.log('list',cuisine.concat(action.name) )
                return{
                    ...state,
                    cuisine:cuisine.concat(action.name)
                }
            } 
            case SIGNUP_ACCOUNT:

                console.log("reducer", action.data.uid, action.data.id)
                
                return{
                    ...state,
                    name:action.data.name,
                    number:action.data.number,
                    email:action.data.email,
                    profileId:action.data.id,
                    kycStatus:false,
                    created:false,
                    uid:action.data.uid,
                    token:action.data.token
                }

            case ADD_KYC:
                const kyc = new Kyc(
                    action.kycDetails.id,
                    action.kycDetails.name,
                    action.kycDetails.phone,
                    action.kycDetails.adharNo,
                    action.kycDetails.adharURL,
                    action.kycDetails.fssiNo,
                    action.kycDetails.fssiUrl,
                    action.kycDetails.panNo,
                    action.kycDetails.panUrl
                )
                return{
                    ...state,
                    kyc:state.kyc.concat(kyc)
                }
        default:
            return state
    }

}