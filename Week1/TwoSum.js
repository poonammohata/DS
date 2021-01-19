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