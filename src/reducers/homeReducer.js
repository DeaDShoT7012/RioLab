import { SUCCESS, FAIL} from "../constants/productConstants";

export const homeReducer = (state={products:[]},action)=>{
    console.log(action.type);
    switch(action.type){
        case SUCCESS:return{
            products:action.payload
        }
        case FAIL:return{
            products:action.payload
        }
        default:return{
            state   
        }
    }
    }