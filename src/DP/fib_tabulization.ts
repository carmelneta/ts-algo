(() => {
    function fib(number: number): number {
        //  Create the table 
        const table = Array(number + 1).fill(0)
        table[1] = 1

        for (let i = 0; i <= number; i++) {
            table[i + 1] += table[i]
            table[i + 2] += table[i]
        }

        return table[number]
    }

    console.log(fib(6)) //  8
    console.log(fib(7)) //  13
    console.log(fib(8)) //  21
    console.log(fib(50)) // 12586269025
})()