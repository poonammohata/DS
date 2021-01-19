function rotateLeft(d, arr) {
    // Write your code here
    let newArray=[];
    let length=arr.length;
    for(let i=0;i<length;i++){
        var newIndex=(i+length-d)%length;
        newArray[newIndex]=arr[i];      
    }
    return newArray;
}