// Solution 1:Runtime: 76 ms Memory Usage: 38.6 MB

var twoSum = function(nums, target) {
    var output=[]
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            var sum=nums[i]+nums[j];
            if(sum==target){
                output[0]=i;
                output[1]=j;
                return output;
            }
        }
    }    
};

//Solution 2:Runtime: 72 ms Memory Usage: 38.6 MB
var twoSum=function(nums,target){
    let start=0;
    for(let i=1;i<nums.length;i++){
        let sum=nums[start]+nums[i];
        if(sum===target){
            return [start,i]
        }
        else if(i==nums.length-1){
            start++;
            i=start;
        }
    }
}