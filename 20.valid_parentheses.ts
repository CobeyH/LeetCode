const OPEN = ["(", "{", "["]

function cancels(s1: string, s2: string) {
    switch(s1) {
        case "(": return s2 === ")"
        case "{": return s2 === "}"
        case "[": return s2 === "]"
        default: return false;
    }
}

function isValid(s: string): boolean {
    let split = s.split('');
    let buffer = [];
    for(let i = 0; i < split.length; i++) {
        if(OPEN.includes(split[i])) {
            buffer.push(split[i])
        } else {
            const popped = buffer.pop();
            if(!cancels(popped, split[i])) return false;
        }
    }
    return buffer.length === 0
};
