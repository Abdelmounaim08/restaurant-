const initialState = {
    cmd:[],
    
};
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case "Ajouter":
            return {...state, cmd:[...state.cmd, action.payload]}
        case "Update":
          
            return {...state, cmd: state.cmd.map(i => i.id === parseInt(action.payload.id) ? ({ ...i, num: action.payload.num }) : i)};
            return state
        case "deleteCmd":
            return {...state, cmd:[...state.cmd.filter((u)=>u.id!==parseInt(action.payload))]}
        default:
            return state
    }
}
export default reducer


