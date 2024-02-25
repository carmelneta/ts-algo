function rotate(nums: number[], k: number): void {
    let arr = new Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
        let index = (i + k) % nums.length
        arr[index] = nums[i]
    }

    nums = arr
}


let nums = [1,2,3,4,5,6,7]
rotate(nums, 3)

console.log(nums)