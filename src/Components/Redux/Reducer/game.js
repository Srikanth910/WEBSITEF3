const intialState = {
    gameId : null
}

export default function game(state = intialState, action) {
    switch(action.type) {
        case "GAME_ID": {
            return {...state ,gameId : action.payload}
        }
        default : {
            return state
        }
    }
}