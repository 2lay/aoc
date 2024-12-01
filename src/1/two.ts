if (import.meta.main) {
    const data = await Deno.readTextFile("./src/1/data.txt");

    // split data file into left and right arrays
    const lines = data.trim().split("\n"); 
    const leftArray: number[] = [];
    const rightArray: number[] = [];

    // parse left numbers to left and right ro right
    for (const line of lines) {
        const parts = line.split(/\s+/);
        const leftNum = parseInt(parts[0]);
        const rightNum = parseInt(parts[1]);
        (leftArray as number[]).push(leftNum);
        (rightArray as number[]).push(rightNum);
    }

    // count frequency of numbers in right array
    const frequency = rightArray.reduce((map, num) => {
        map.set(num, (map.get(num) || 0) + 1);
        return map;
    }, new Map<number, number>());

    // calculate similarity score
    let similarityScore = 0;
    
    // each number in left array, multiply by its freq from the right array
    for (const leftNum of leftArray) {
        const freq = frequency.get(leftNum) || 0;
        similarityScore += leftNum * freq;
    }

    // spit out the answer
    console.log("answer:", similarityScore);
}
