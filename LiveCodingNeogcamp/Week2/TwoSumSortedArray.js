//Solution 1 Runtime:64ms Memory:38.5MB

var twoSum=function(numbers,target){
    let start=0;
    let end=numbers.length-1;
    while(start<end){
        let sum=numbers[start]+numbers[end]
        if(sum==target){
            return [start+1,end+1];
            break;
        }
        else{
            sum>target?end-- : start++;
        }
}
}

//Solution 2 Runtime:76ms Memory:39.1MB

var twoSum=function(numbers,target){
    let start=0;
    let end=numbers.length-1;
    while(start<end){
        let sum=numbers[start]+numbers[end]
        if(sum==target){
            return [start+1,end+1];
            break;
        }
        else if(sum>target){
            end--
        }
        else{
            start++
        }
}
};

//Solution 3 Runtime:272ms Memory:38.8MB
var twoSum = function(numbers, target) {
    for(var i=0;i<numbers.length;i++){
        for(var j=i+1;j<numbers.length;j++)
            {
                if(numbers[i]+numbers[j]==target){
                    return [i+1,j+1]
                    break;
                }
            }
    }
    
};