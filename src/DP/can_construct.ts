(() => {

    function canConstruct(target: string, strings: string[], cache: Map<string, boolean> = new Map()): boolean {
        if (target in cache) {
            return cache[target]
        }

        if (target === '') {
            return true
        }

        for (let word of strings) {
            if (target.indexOf(word) === 0) {   //  If the word is prefix of the target
                const suffix = target.slice(word.length)
                if (canConstruct(suffix, strings, cache)) {
                    cache[target] = true
                    return true
                }
            }
        }

        cache[target] = false
        return false
    }

    function countConstruct(target: string, strings: string[], cache: Map<string, number> = new Map()): number {
        if (target in cache) {
            return cache[target]
        }

        if (target === '') {
            return 1
        }

        let count = 0

        for (let word of strings) {
            if (target.indexOf(word) === 0) {
                const suffix = target.slice(word.length)
                count += countConstruct(suffix, strings, cache)
            }
        }

        cache[target] = count
        return count
    }

    // console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) //  true
    // console.log(canConstruct('skateboard', ['bo', 'rd', 'are', 't', 'ska', 'sk', 'boar'])) //   false

    console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))   // 2
    console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',[
        'e',
        'ee',
        'eeee',
        'eeeeeeee'
    ])) //  0
})()