function getRandomInt(): number {
    return Math.floor(Math.random() * 25) + 1;
}

function genNdistinctNumbers(n: number): number[] {
    if(n < 1 || n > 25) {
        throw new Error('n must be between 1 and 25');
    }

    const numbers: number[] = [];
    while(numbers.length < n) {
        const randomNumber = getRandomInt();
        if(!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    return numbers;
}

export default genNdistinctNumbers;