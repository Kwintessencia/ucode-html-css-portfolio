// let beginRange = +prompt('Enter begin number', 1);
// let endRange = +prompt('Enter end number', 100);

//     for (i = beginRange; i<=endRange; i++) {
//         if(i % 2 == 0){
//             console.log(`${i} is even`);
//         }else if(i % 3 == 0){
//             console.log(`${i} is a multiple of 3`);
//         }else if(i % 10 == 0){
//             console.log(`${i} is even, a multiple of 10`);
//         }else{
//             console.log(`${i} -`);
//         }
//         };
function checkDivision(beginRange, endRange){
    for (i = beginRange; i<=endRange; i++){
        let str = ''
debugger
                    if(i % 2 == 0){
                        str = `${i} is even`;
                    }if(i % 3 == 0){
                        if( str.length === 0){
                        str = `${i} is a multiple of 3`;}
                        else {
                            str = str.concat(',',' a multiple of 3');
                        }
                    }if(i % 10 == 0){
                        if( str.length === 0){
                        str = `${i} is a multiple of 10`;  
                        } else
                        str = str.concat(',',' a multiple of 10');
                    }if(str.length ===0){
                        str = `${i} -`;
                    }; console.log(str);
    }
}
let beginRange = +prompt('Enter begin number', 1);
let endRange = +prompt('Enter end number', 100);
checkDivision(beginRange, endRange);