function search(nums: number[], target: number): number {
    let high = Math.floor(nums.length);
    let low = 0

    do {
        const center = Math.floor(low + (high - low) / 2)
        const value = nums[center]

        console.log(`high: ${high} | low ${low} | center ${center} | value: ${value}`)

        if (value === target) {
            return center
        } else if (value > target) {
            high = center
        }else {
            low = center + 1
        }
    } while (low < high)

    return -1
}

const results = search([-1,0,3,5,9,12], 9)
// const results = search([-1,0,3,5,9,12], 2)
console.log(results);