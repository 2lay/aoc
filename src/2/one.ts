if (import.meta.main) {
    const lines = (await Deno.readTextFile("./src/2/data.txt")).trim().split("\n");
    let correct = 0;

    for (const line of lines) {
        const numbers = line.split(" ").map(Number);
        const valid = (isInc) => numbers.every((num, index) => index === 0 || [1, 2, 3].includes((isInc ? num - numbers[index - 1] : numbers[index - 1] - num)));
        if (valid(true) || valid(false)) correct++;
    }

    console.log("result: " + correct);
}
