//  Add a number with all of the numbers below it


function recurse_sum(item: number): number {
    //  Base Case 
    if (item === 1) {
        return 1
    }

    //  Recursive Case
    //  Call the same function with -1 argument 
    return item + recurse_sum(item - 1)
 }


 const result = recurse_sum(5)
 console.log(result)


