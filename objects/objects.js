export function makePet(name, type, age, food, toys) {
    return {
        name: name,
        type: type,
        age: age,
        food: food,
        toys: toys,
    };
}

export function formatWorkBook(data) {
    return {
        work: data.book.title,
        // you actually need a space between '' for it to be a space, who knew?
        writer: data.author.first + ' ' + data.author.last,
    };
}