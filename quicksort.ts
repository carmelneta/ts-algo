function qs(arr: number[], lo: number, hi: number): void {
    console.log(`Sorting array ${arr}, from: ${lo} to: ${hi}`)
    if (lo > hi) {
        //  End the recurcive 
        return
    }

    //  1. Create the partion, get the index
    const pivotIdx = partition(arr, lo, hi)

    //  2. Sort recurcivlly left side of pivot 
    qs(arr, lo, pivotIdx - 1)
    //  3. Sort recurcivlly left side of pivot 
    qs(arr, pivotIdx + 1, hi)
}

// Return and index of the pivot 
// Changed the array to have:
//  1. all items left to the pivot smaller then the pivot
//  2. all items right to the pivot larger then the pivot
function partition(arr: number[], lo: number, hi: number): number {
    // Setting the pivot allways to high is arbitrery 
    // This can be improve with some logic (out of scope)
    const pivot = arr[hi]

    let idx = lo - 1

    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i]
            arr[i] = arr[idx]
            arr[idx] = tmp
        }
    }

    //  Lastlly, placing the pivot at its expected location
    idx++;
    arr[hi] = arr[idx]
    arr[idx] = pivot

    //  Return the pivot index
    console.log(`Pivoting ${pivot} at: ${idx}`)
    return idx
}

function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length -1)
}


const arr = [9, 3, 7, 4, 69, 420, 42];
// quick_sort(arr)
// console.log(arr)


quick_sort([1, 4, 2, 3, 10])
