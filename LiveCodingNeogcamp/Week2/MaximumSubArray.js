var maxSubArray = function(nums) {
    let maxNo=nums[0];
    for(let i=1;i<nums.length;i++){
        if(nums[i]>maxNo){
            maxNo=nums[i]
        }
    }
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i];
        if(sum>maxNo){
            maxNo=sum;
        }
        if(sum<0){
            sum=0;
        }
    }  
    return maxNo;
};