
export const nonSortedArray = ()=>{
    let arr: number[] = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
    return arr;
}
