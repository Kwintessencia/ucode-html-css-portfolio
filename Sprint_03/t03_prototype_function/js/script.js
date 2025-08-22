String.prototype.removeDuplicates = function (){
    let words = this.split(' ');
    const newWords = new Set(words);
    let arr = Array.from(newWords);
    let str = `${arr[0]}`;
    for (let i = 1; i<arr.length; i++){
        if(arr[i] != ''){
            str+=` ${arr[i]}`
        }
    }
    return str;
};