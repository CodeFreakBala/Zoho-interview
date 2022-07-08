


export function serachItem(state,item,key){
    for(let i=0;i<state.length;i++){
        if(state[i][item] == key){
            return state[i]
        }
    }
}