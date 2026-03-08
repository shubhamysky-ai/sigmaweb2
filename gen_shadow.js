
let bxs = ['0 0 0'];
const gap = 3;
const coef = -0.3;
for (let i = 1; i <= 4; i++) {
    bxs.push(`${i * gap}rem 0 0 ${i * coef}rem`);
    bxs.push(`${-i * gap}rem 0 0 ${i * coef}rem`);
    bxs.push(`0 ${-i * gap}rem 0 ${i * coef}rem`);
    bxs.push(`0 ${i * gap}rem 0 ${i * coef}rem`);
    for (let j = 1; j <= 4; j++) {
        bxs.push(`${i * gap}rem ${j * gap}rem 0 ${i * j * 1.5 * coef}rem`);
        bxs.push(`${i * gap}rem ${-j * gap}rem 0 ${i * j * 1.5 * coef}rem`);
        bxs.push(`${-i * gap}rem ${j * gap}rem 0 ${i * j * 1.5 * coef}rem`);
        bxs.push(`${-i * gap}rem ${-j * gap}rem 0 ${i * j * 1.5 * coef}rem`);
    }
}
console.log(bxs.join(', '));
