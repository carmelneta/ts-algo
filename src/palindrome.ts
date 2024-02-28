function isPalindrome(s: string): boolean {
    let start = 0
    let end = s.length - 1 

    while (start < end) {
        if (!/^[A-Za-z0-9]+$/.test(s.charAt(start))) {
            start++
            continue
        }

        if (!/^[A-Za-z0-9]+$/.test(s.charAt(end))) {
            end--
            continue
        }

        if (s.charAt(start).toLowerCase() !== s.charAt(end).toLowerCase() ) {
            return false
        }

        start++
        end--
    }

    return true
};

function isNumberPalindrome(x: number): boolean {
    if (x < 0 || (x % 10 === 0 && x != 0)) {
        return false
    }

    let reverted = 0
    while (x > reverted) {
        //  Append the last digit of x
        reverted = reverted * 10 + x % 10

        //  Chagne the last digit of x
        x = Math.floor(x/10)

        console.log(x, reverted)
    }

    return x === reverted || x === reverted / 10
}


let f = isNumberPalindrome(1231239081290381)
console.log(f)