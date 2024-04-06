
export const Ajouter = (cmd) => {
    return {type:"Ajouter", payload:cmd}
}

    export const Update=(tb)=>{
        return {type:"Update", payload:tb}
    }

export const deleteCmd = (id) => {
    return {type:"deleteCmd", payload:id}
}