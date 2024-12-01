if (import.meta.main) {
    const data = await Deno.readTextFile("data.txt");

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

    // sort both arrays (thank god i don't have to write bubblesort, i <3 ecmascript)
    leftArray.sort((a, b) => a - b);
    rightArray.sort((a, b) => a - b);

    // assign initial value
    let distance = 0;

    // calculate distance between pairs
    for (let i = 0; i < leftArray.length; i++) {
        distance += Math.abs(leftArray[i] - rightArray[i]);
    }
    
    // spit out the naswer
    console.log("answer:", distance);
}
