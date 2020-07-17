const { WriterProto } = require('./writerProto')

test(`instantiates writerProto and confirms projectId`, () => {
    const test = new WriterProto(777,`README_JEST.md`)
    expect(test.getId()).toBe(777)
})

test(`sets properties and runs documentBuilder`, async () => {
    const filepath = `README_JEST.md`
    const test = new WriterProto(777,filepath)
    test.setProperty(`title`,`abcdefg\n`)
    test.setProperty(`badges`,[`badge1 `,`badge2 `,`badge3`])
    test.setProperty(`description`,`abcdefg\n`)
    test.setProperty(`usage`,`abcdefg\n`)
    test.setProperty(`snapshot`,`abcdefg\n`)
    test.setProperty(`tableofcontents`,[`toc1\n`,`toc2\n`,`toc3\n`])
    test.setProperty(`license`,`abcdefg\n`)
    test.setProperty(`installation`,`abcdefg\n`)
    test.setProperty(`tests`,[`test1\n`,`test2\n`,`test3\n`])
    test.setProperty(`credits`,[`person1\n`,`person2\n`,`person3\n`])
    test.setProperty(`contributing`,`abcdefg\n`)
    test.setProperty(`questions`,[`quest1\n`,`quest2\n`,`quest3\n`])
    const log = jest.spyOn(global.console, `log`)
    await test.documentBuilder()
    expect(log).toHaveBeenLastCalledWith('Append questions');
})
