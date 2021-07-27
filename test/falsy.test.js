const checkIfFalsy = require('../src/falsy.js');
//toBeNull matches only null
test ('test null',()=>{
    expect(null).toBeNull()
})

//toBeUndefined matches only undefined
test ('test undefined',()=>{
    expect(undefined).toBeUndefined()
})

//toBeFalsy matches anything that an if statement treats as false
test ('test empty string',()=>{
    expect("").toBeFalsy()
})

test ('test NaN',()=>{
    expect(NaN).toBeFalsy()
})

test ('test false',()=>{
    expect(false).toBeFalsy()
})

//toBeDefined matches only defined
test('test 0',()=>{
    expect(0).toBeDefined()
})

//toBeTruthy matches anything that an if statement treats as true
test('test a string',()=>{
    expect('name').toBeTruthy()
})

