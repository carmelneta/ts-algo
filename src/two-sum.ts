
function twoSum(nums: number[], target: number): number[] {
    let map: Record<number, number> = {}

    for (let i = 0; i < nums.length; ++i) {
        const x = target - nums[i]
        if (map[x] || map[x] === 0) {
           return [i, map[x]]
        }

        map[nums[i]] = i
    }

    return []
}

console.log(twoSum([3,3], 6))