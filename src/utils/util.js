export const oneOf = (arr,value,defaultVal) =>{
    return arr.reduce((prev,cur)=>cur===value?cur:prev,defaultVal)
}