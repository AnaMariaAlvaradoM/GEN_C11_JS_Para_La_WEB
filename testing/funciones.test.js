const {mean} = require('./funciones.js');

test('mean(20,10) debería ser (15)', () =>{
    expect(mean(10,20)).toBe(15);
})

test('mean(20,10) debería ser (15)', () =>{
    expect(mean(10,20,30)).toBe(20);
})
test('mean(20,10) debería ser (15)', () =>{
    expect(mean(10, 20, 30, 40)).toBe(20);
})
























// test('sumar(2,5) debe retornar (7)', () =>{
//     expect(sumar(2, 5)).toBe(7)
// })


// test('restar(2,5) debe retornar (7)', () =>{
//     expect(restar(5, 3)).toBe(2)
// })

