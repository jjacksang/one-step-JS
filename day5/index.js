const sumAndDouble = (...rest) => {
    const sum = rest.reduce((acc, curr) => acc + curr, 0);

    const double = rest.map((i) => i * 2);

    return { sum, double };
};

console.log(sumAndDouble(1, 2, 3, 4));
