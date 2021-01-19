function reverseArray(a) {
    var newArray=[]
    for(var i=0;i<a.length;i++){
        newArray[i]=a[a.length-1-i]
    }
    return newArray

}