function rosenbrock3D(x, y, z) {
    const a = 1;
    const b = 100;
    const c = 100;
    
    return Math.pow(a - x, 2) + b * Math.pow(y - Math.pow(x, 2), 2) + c * Math.pow(z - Math.pow(y, 2), 2);
}

function calcularRosenbrock3D() {
    const z = [];
    for (let i = -2; i <= 2; i += 0.1) {
        for (let j = -2; j <= 2; j += 0.1) {
            z.push(rosenbrock3D(i, j, (1 - i) ** 2 + 100 * (j - i ** 2) ** 2));
        }
    }
    return z;
}

module.exports = calcularRosenbrock3D;
