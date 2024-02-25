function removeDuplicates(nums: number[]): number {
    if (nums.length < 3) {
        return nums.length
    }
    let writer = 2
    for (let reader = 2; reader < nums.length; reader++) {
        if (nums[reader] != nums[writer - 2]) { 
            nums[writer] = nums[reader]
            writer++
        }
    }

    return writer
};

// removeDuplicates([1,1,1,2,2,3])
removeDuplicates([1,2,3])