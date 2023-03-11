// bubble sorting
/* let arr = [8,2,4,1,3,45,67,89,3,3,12,34,5,6,7,898,23,10,11,100.006];
let len = arr.length;
let res=[];
let isSorted;
for(let i=0; i<len-1; i++){
    isSorted=true;
    for(let j=0; j<len-i; j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            isSorted=false;
        }
    }
    if(isSorted){
        break;
    }
}
console.log(arr); */

/* let arr = [8,2,4,1,3,45,67,89,3,3,12,34,5,6,7,898,23,10,11,100.006];
const min = Math.min(...arr);
console.log(min); */

// anti-diagonals for n*n array
/* let arr = [[1,2,3],
           [4,5,6],
           [7,8,9]
        ];
let arr4 = [[1,2,3,4],
           [5,6,7,8],
           [9,10,11,12],
           [13,14,15,16]
        ];
let arr5 = [[1,2,3,4,5],
           [6,7,8,9,10],
           [11,12,13,14,15],
           [16,17,18,19,20],
           [21,22,23,24,25]
        ];

function antiDiagonal(arr) {
    let len = arr.length;
    let diagonalArr = [];
    for(let i=0; i<len; i++) {
        let rowArr = [];
        let col = i;
        let row = 0;
        while(col >= 0 && row < len) {
            rowArr.push(arr[row][col]);
            col--;
            row++;
        }
        diagonalArr.push(rowArr);
    }
    let tempArray = [];
    for(let j=len-1; j>=1; j--) {
        let rowArr = [];
        let row = j;
        let col = len-1;
        while(col >= 0 && row < len) {
            rowArr.push(arr[row][col]);
            col--;
            row++;
        }
        tempArray.push(rowArr);
    }
    diagonalArr.push(...tempArray.reverse());
    for(let k=0; k<diagonalArr.length; k++) {
        let elementLength = diagonalArr[k].length;
        while(elementLength < len) {
            diagonalArr[k].push(0);
            elementLength++;
        }
    }
    return diagonalArr;
}

console.log(antiDiagonal(arr5)); */

// insert element in an Array

/* function insert(arr, el, pos) {
    arr.splice(pos,0,el);
    return arr;
}
let arr = [2,3,5,8,12,7];
console.log(insert(arr,6,4)); */

// rotate array

/* function rotate(arr, n) {
    // approach 1
    for(let i=0; i<n; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
    
    // approach 2
    // let pos = arr.length - n;
    // let removedArr = arr.splice(pos);
    // return removedArr.concat(arr);
}

let arr = [2,3,5,8,12,7];
console.log(rotate(arr,4)); */