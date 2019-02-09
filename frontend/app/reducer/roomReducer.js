module.exports = (state = [], action) => {

    switch(action.type){
        case "GET_ROOMS":
            return  action.rooms
    
        default:
            return state
    }
}