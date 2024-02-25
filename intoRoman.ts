const values = {
    1000: 'M',
    500: 'D',
    100: 'C',
    50: 'L',
    10: 'X',
    5: 'V',
    1: 'I',

    900: 'CM',
    400: 'CD',
    90: 'XC',
    40: 'XL',
    9: 'IX',
    4: 'IV'

}

function intToRoman(num: number): string {
    let results = ''
    let v = Object.keys(values).map(Number).sort((a) => a)

    while (v.length > 0) {
        if (num - v[v.length -1] >= 0) {
            results += (values[v[v.length -1]])
            num -= v[v.length -1]

            if (num === 0) {
                return results
            }
        }else { 
            v.pop()
        }
    }
}

console.log(intToRoman(1994))