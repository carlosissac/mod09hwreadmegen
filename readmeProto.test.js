const { ReadMeProto } = require('./readmeProto')

test(`instantiates ReadMeProto and confirms projectId`, () => {
    const test = new ReadMeProto(666)
    expect(test.getId()).toBe(666)
})

test(`validate setProperty and getProperty`, () => {
    const test = new ReadMeProto(666)
    test.setProperty(`title`,`abcdefg`)
    test.setProperty(`badges`,[`badge1`,`badge2`,`badge3`])
    test.setProperty(`description`,`abcdefg`)
    test.setProperty(`usage`,`abcdefg`)
    test.setProperty(`snapshot`,`abcdefg`)
    test.setProperty(`tableofcontents`,[`toc1`,`toc2`,`toc3`])
    test.setProperty(`license`,`abcdefg`)
    test.setProperty(`installation`,`abcdefg`)
    test.setProperty(`tests`,[`test1`,`test2`,`test3`])
    test.setProperty(`credits`,[`person1`,`person2`,`person3`])
    test.setProperty(`contributing`,`abcdefg`)

    expect(test.getProperty(`title`)).toBe(`abcdefg`)
    expect(test.getProperty(`badges`)).toEqual([`badge1`,`badge2`,`badge3`])
    expect(test.getProperty(`description`)).toBe(`abcdefg`)
    expect(test.getProperty(`usage`)).toBe(`abcdefg`)
    expect(test.getProperty(`snapshot`)).toBe(`abcdefg`)
    expect(test.getProperty(`tableofcontents`)).toEqual([`toc1`,`toc2`,`toc3`])
    expect(test.getProperty(`license`)).toBe(`abcdefg`)
    expect(test.getProperty(`installation`)).toBe(`abcdefg`)
    expect(test.getProperty(`tests`)).toEqual([`test1`,`test2`,`test3`])
    expect(test.getProperty(`credits`)).toEqual([`person1`,`person2`,`person3`])
    expect(test.getProperty(`contributing`)).toBe(`abcdefg`)
})

test(`confirm error message is console logged`, () => {
    const test = new ReadMeProto(666)
    const log = jest.spyOn(global.console, `log`)
    test.handleError(`error`)
    expect(log).toHaveBeenCalledWith(`File Write Error >>>> error`)
})

test(`clearing and appending content of an existing file`, async () => {
    const test = new ReadMeProto(666)
    const filepath = `README_JEST.md`
    const content1 = `abcdefg`
    const content2 = `hijklmn`
    const id1 = `id1`
    const id2 = `id2`
    await expect(test.fileClear(filepath)).resolves.toBe(`Cleared README_JEST.md`)
    await expect(test.fileAppend(filepath, content1, id1)).resolves.toBe(`Append id1`)
    await expect(test.fileAppend(filepath, content2, id2)).resolves.toBe(`Append id2`)
})  

test(`error when trying to append content to a non-existing file`, async () => {
    const test = new ReadMeProto(666)
    const filepath = `README_LOCKED.md`
    const content1 = `abcdefg`
    const id1 = `id1`
    await expect(test.fileAppend(filepath, content1, id1)).rejects.toThrow(`EPERM: operation not permitted, open 'README_LOCKED.md'`)
})