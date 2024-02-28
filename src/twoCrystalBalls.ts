function two_crystal_balls(breaks: boolean[]): number {

    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;

    //  Find where the first ball break
    //  Jump in none constant steps so the alogrithm wont be at O(N) linear 
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    //  Now, we know the first ball was broke at i, 

    //  Go back to the last step
    i -= jmpAmount;

    //  Loop from the the step up until it breaks
    for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}

// function two_crystal_balls_binary(breaks: boolean[]): number {
//     let high = breaks.length
//     let low = 0
//     let firstBallBreak = high
//     do {
//         const center = low + (high - low) / 2
//         const value = breaks[center]

//         if (value) {
//             first = center
//         }
//     } while (low < high)
// }


const buildingStores = new Array(5).fill(false);    //  True is where the ball got broken
buildingStores[50] = true

const results = two_crystal_balls(buildingStores)

console.log(results, results)
