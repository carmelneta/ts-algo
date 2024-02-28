function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }

        console.log(`I loop ${i}`)
    }
}


let array = [0, 1, 4, 2 , 3]


bubble_sort([1,6,2,4,5])
// console.log(array)