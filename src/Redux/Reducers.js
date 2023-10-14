const initialstate=100;
export default function Reducers(state=initialstate,action){
switch(action.type){
    case "increment":
        return state+1;
    
    case "decrement":
        return state-1;
    
    case "reset":
        return 0;
    default :
    return state;
}
}