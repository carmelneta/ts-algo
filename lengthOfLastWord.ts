function lengthOfLastWord(s: string): number {
    let end = -1
    
    for (let i = s.length - 1; i >= 0; i-- ) {
        const char = s.charAt(i)
        if (char === ' ' && end > -1) {
            return end - i
        }

        if (char !== ' ' && end === -1) {
            end = i
        }

    }
    
    return end == -1 ? s.length : 1
};


console.log(lengthOfLastWord('   fly me   to   the moon  '))
console.log(lengthOfLastWord(' a'))
console.log(lengthOfLastWord('a'))
console.log(lengthOfLastWord('a '))