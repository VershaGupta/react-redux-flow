const intitailState = {notes:[]}
export default (state = intitailState, action) => {
switch (action.type){
    case 'ADD':
     return {notes:state.notes.concat(action.payload)}
    break;
    default:
    return state;

}
}