function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<(arr.length-i-1);j++){
            if(arr[j]>arr[j+1]){
                const swap = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = swap;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5,4,2,6,8,14,1,3]));

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min = i; 
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let less = arr[min];
            arr[min] = arr[i];
            arr[i] = less;
        }
    }
    return arr;
}

console.log(selectionSort([5,4,2,6,8,14,1,3]));

let insertionSort = (arr) => {
    let length=arr.length;
    for(let i=1;i<length;i++){
        let key=arr[i];
        let j=i-1
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=key;
    }
    return arr;
}

console.log(insertionSort([6,4,5,2,8,14,1,3]));


const combine = (leftArr, rightArr) => {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (leftArr.length && rightArr.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (leftArr[0] < rightArr[0]) {
            arr.push(leftArr.shift())  
        } else {
            arr.push(rightArr.shift()) 
        }
    }
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...leftArr, ...rightArr ]
}

//should return [0,1,2,3,4,6,7,9,11]
console.log(combine([1,2,7,9],[0,3,4,6,11]));

//should return [0,1]
console.log(combine([1],[0]));

const mergeSort = (arr) => {
    const half = arr.length / 2
    
    // Base case or terminating case
    if(arr.length < 2){
    return arr 
    }
    const left = arr.splice(0, half)
    return combine(mergeSort(left),mergeSort(arr))
}
//should return [1,2,3,4,5,6,8,14]
console.log(mergeSort([5,4,2,6,8,14,1,3]));

const partition2 = (arr) => {
    let pivot = arr[0];
    let pointer = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            pointer++;
            
            let temp = arr[i];
            arr[i] = arr[pointer];
            arr[pointer] = temp;
        }
    }
    let temp = arr[0];
    arr[0] = arr[pointer];
    arr[pointer] = temp;
    return pointer;
}

//time for recursion again!!
//partition your array, then quickSort the left half
//and the right half.
//Each half should be partitioned and quickSorted recursively.
const quickSort = (arr) => {
    const quickSort = (arr, left = 0, right = arr.length - 1) => {
        let index;
        if (arr.length > 1) {
           index = partition2(arr, left, right);
           if (left < index - 1) {
              quickSort(arr, left, index - 1);
           };
           if (index < right) {
              quickSort(arr, index, right);
           };
        }
        return arr;
     }
     let sortedArray = quickSort(arr);
     console.log(sortedArray);
}
console.log(quickSort([5,4,2,6,8,14,1,3]));

//given a string of words(with spaces),
//return an array of words
//"Did I shine my shoes today?" ->
//returns ["Did","I","shine","my","shoes","today?"]
//"two             words" -> ["two","words"]
const stringToWordArray = (str) => {
    let words=str;
    for(let i = 0; i < str.length; i++){
        if(words[i]!=""){
            wordArr=words.split(" ");
        }
        else{
            console.log("theres empty spaces inn this arr");
        }
    }
    console.log(wordArr);
}

//write a function that, given a string of words(with spaces),
//returns a new string with words in reverse sequence.
//"This is a test" -> "test a is This"
const reverseWordOrder = (str) => {
    let words=str;
    wordArr=words.split(" ");
    console.log(wordArr.reverse());
}
console.log(reverseWordOrder("This is a test"));

const dedupe = (str) => {
    // variables set to empty string and the actual character
    var result="";
    var dup={}
    // for loop trough the string
    for(i=0;i<str.length;i++){
        let char=str[i];
        // if theres a dupuent character
        if(dup[char]){
            dup[char]++;
        }
        else{
            dup[char]=1;
            result=result+char;
        }
    }
    return result;
}
// it only reads the the middle string and completely ignores the first and last str
console.log(dedupe("Snaps! crackles! pops!"));
console.log(dedupe("Snaps! crackles!"));
console.log(dedupe("Snaps!"));

// improved version
const dedupe2 = (str) => {
    // variables set to empty string and the actual character
    var result="";
    var dup={}
    // for loop trough the string
    for(i=str.length-1;i>=0;i--){
        let char=str[i];
        // if theres a dupuent character
        if(dup[char]){
            dup[char]++;
        }
        else{
            dup[char]=1;
            result=char+result;
        }
    }
    return result;
}
// it only reads the the middle string and completely ignores the first and last str
console.log(dedupe2("Snaps! crackles! pops!"));
console.log(dedupe2("Snaps! crackles!"));
console.log(dedupe2("Snaps!"));

const parseInt2 = (str) => {
    let num = 0;
    for(let i = 0; i < str.length; ++i)
        num += (str.charCodeAt(i) - 48) * (10 ** (str.length - 1 - i));
    return num;
}

const encode = (str) => {
    let counter = {};
    let str1 = "";
    for (let i = 0; i < str.length; i++)
      counter[str[i]] = counter[str[i]] + 1 || 1;
    for (const [key, val] of Object.entries(counter)) str1 += key + val;
    return str1;
  };
  
const decode = (str) => {
    let newStr = '';
    let currChar = str[0];
    let countStr = '';
    let countInt = 0;

    for(let i = 1; i < str.length; ++i){
        if(str[i] >= '0' && str[i] <= '9'){
            countStr += str[i];
        }
        else{
            countInt = parseInt2(countStr);
            for(let j = 0; j < countInt; ++j){
                newStr += currChar;
            }
            countStr = '';
            currChar = str[i];
        }
    }
    countInt = parseInt2(countStr);
    for(let j = 0; j < countInt; ++j){
        newStr += currChar;
    }

    return newStr;
}

console.log(decode("a3b2c4"));
console.log(decode("t2h100j4"));

const intersect = (arrLeft, arrRight) => {
    newArr=[];
    // let j=arrRight[i];
    for(i=0;i<arrLeft.length;i++){
        if(arrLeft[i]==arrRight[j]){
            newArr.push(arrLeft[i]);
        }
        else{
            console.log("moving to next index");
        }
    }
    return newArr;
}

console.log(intersect([2,4,7,9,10],[2,3,5,7,9,10]));
console.log(intersect([1,1,4,5,8],[1,1,1,5,6,8]));
console.log(intersect([1,3,5,7,9],[2,4,6,8,10]));

const union = (arrLeft, arrRight) => {
    var num={};
    var result=[];
    for(var i=arrLeft.length-1;i>=0;i--){
        num[arrLeft[i]]=arrLeft[i];
    }
    for(var j=arrRight.length-1;j>=0;j--){
        num[arrRight[j]]=arrRight[j];
    }
    for(n in num){
        if(num){
            result.push(num[n]);
        }
    }
    return result;
}

console.log(union([2,4,7,9,10],[2,3,5,7,9,10]));
console.log(union([1,2,2,2,7],[2,2,6,6,7]));
console.log(union([2,7,2,1,2], [6,7,2,7,6,2]));

//Intersect two arrays to create an unsorted multiset
//return the new array of all the values that both arrays
//have in common

//[6,7,2,7,6,2], [2,7,2,1,2] returns [7,2,2]

const intersectUnsorted = (leftArr,rightArr) => {
    target=[];
    for(var i=leftArr.length-1;i>=0;i--){
        for(var j=rightArr.length-1;j>=0;j--){
            if(leftArr[i]==rightArr[j]){
                target.push(rightArr[j]);
            }
        }
    }
    for(var k=target.length-1;k>=0;k--){
        if(target[k]==target[k-1] && target[k+1]){
            target.pop();
        }
    }
    return target;
}

console.log(intersectUnsorted([6,7,2,7,6,2], [2,7,2,1,2]));

const binToDec = (str) => {
    let decimal = + 0;
    let bits = +1;
    for(let i=0;i<str.length;i++){
        let current = +(str[str.length-1-1]);
        if(current==1){
            decimal+=bits;
        }
        bits*=2;
    }
    console.log(decimal);
}

console.log(binToDec("1010101"));
console.log(binToDec("100011"));

const decToHexStr = (val) => {
    var n=val.toString(16);
    if((n.length%2)>0){
        a="0"+n;
    }
    return n;
}

console.log(decToHexStr(108));
console.log(decToHexStr(420));

const calcPrefix = (arr) => {
    var widdledArr = [];
    var result = 0;
    for (let i=0; i<arr.length; i++){
        if (typeof arr[i] === 'string' && Number.isInteger(arr[i+1])&& Number.isInteger(arr[i+2])){
            if (arr[i] == "+"){
                result = arr[i+1] + arr[i+2];
                widdledArr.push(result);
                i+=2;
            }
            else if (arr[i] == "-"){
                result = arr[i+1] - arr[i+2];
                widdledArr.push(result);
                i+=2;
            }
            else if (arr[i] == "*"){
                result = arr[i+1] * arr[i+2];
                widdledArr.push(result);
                i+=2;
            }
            else if (arr[i] == "/"){
                result = arr[i+1] / arr[i+2];
                widdledArr.push(result);
                i+=2;
            }
            else {
                return "Found something unexpected"
            }
        }
        else {
            widdledArr.push(arr[i]);
        }
    }
    if (widdledArr.length > 1){
        return calcPrefix(widdledArr);
    }
    return result;
}