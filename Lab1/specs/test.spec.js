const fieldsAreNotEmpty = require('../js/main.js')
describe('validateValues', () => {
    test('field a is empty', () => {
        let x = 1, y = 1, r = 1
        expect(fieldsAreNotEmpty(x, y, r)).toBeTruthy()
    })
})
