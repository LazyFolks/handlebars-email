const { hbsEmail, templet } = require('../main')

test('hbsEmail', () => {
    const template = hbsEmail('src/__tests__/assets/template.hbs', { message: "Hello World!" })
    const finalTemplate = templet.reader('src/__tests__/assets/finalTemplate.html')
    expect(template).toBe(finalTemplate)
})