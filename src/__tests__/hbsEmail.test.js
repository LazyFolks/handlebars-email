const { hbsEmail, Templet } = require('../main')

test('hbsEmail', () => {
    const template = hbsEmail('src/__tests__/assets/template.hbs', { message: "Hello World!" })
    const finalTemplate = Templet.Reader('src/__tests__/assets/finalTemplate.html')
    expect(template).toBe(finalTemplate)
})