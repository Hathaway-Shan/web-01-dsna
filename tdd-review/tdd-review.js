export function doge(array){
    return array.length;
}

export function third(dogs){
    return dogs[2];
}

export function firstLast(obj){
    const keys = Object.keys(obj);
    const firstKey = keys[0];
    const lastKey = keys[keys.length - 1];
    return firstKey;
    return lastKey;
    //goes and looks up 
    const lastValue = obj[lastKey];
    return {
        firstKey: firstKey
        lastValue: lastValue
    }
}