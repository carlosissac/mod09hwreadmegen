const { LicenseProto } = require('./licenseProto')

test(`instantiates licenseProto and confirms type`, () => {
    const test = new LicenseProto(`ISC`)
    expect(test.getType()).toBe(`ISC`)
})

test(`verifies getBadge Apache License 2.0`, () => {
    const test = new LicenseProto(`Apache License 2.0`)
    expect(test.getBadge()).toBe(`![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg) `)
})

test(`verifies getBadge Boost`, () => {
    const test = new LicenseProto(`Boost`)
    expect(test.getBadge()).toBe(`![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg) `)
})

test(`verifies getBadge Boost`, () => {
    const test = new LicenseProto(`Boost`)
    expect(test.getBadge()).toBe(`![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg) `)
})

test(`verifies getBadge BSD 3-Clause License`, () => {
    const test = new LicenseProto(`BSD 3-Clause License`)
    expect(test.getBadge()).toBe(`![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg) `)
})

test(`verifies getBadge GNU GPLv3`, () => {
    const test = new LicenseProto(`GNU GPLv3`)
    expect(test.getBadge()).toBe(`![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg) `)
})

test(`verifies getBadge MIT`, () => {
    const test = new LicenseProto(`MIT`)
    expect(test.getBadge()).toBe(`![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) `)
})

test(`verifies getBadge ISC`, () => {
    const test = new LicenseProto(`ISC`)
    expect(test.getBadge()).toBe(`![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg) `)
})

test(`verifies getBadge IBM Public License v1.0`, () => {
    const test = new LicenseProto(`IBM Public License v1.0`)
    expect(test.getBadge()).toBe(`![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg) `)
})

test(`verifies getLink Apache License 2.0`, () => {
    const test = new LicenseProto(`Apache License 2.0`)
    expect(test.getLink()).toBe(`https://opensource.org/licenses/Apache-2.0`)
})

test(`verifies getLink Boost`, () => {
    const test = new LicenseProto(`Boost`)
    expect(test.getLink()).toBe(`https://www.boost.org/LICENSE_1_0.txt`)
})

test(`verifies getLink BSD 3-Clause License`, () => {
    const test = new LicenseProto(`BSD 3-Clause License`)
    expect(test.getLink()).toBe(`https://opensource.org/licenses/BSD-3-Clause`)
})

test(`verifies getLink GNU GPLv3`, () => {
    const test = new LicenseProto(`GNU GPLv3`)
    expect(test.getLink()).toBe(`https://www.gnu.org/licenses/gpl-3.0`)
})

test(`verifies getLink MIT`, () => {
    const test = new LicenseProto(`MIT`)
    expect(test.getLink()).toBe(`https://opensource.org/licenses/MIT`)
})

test(`verifies getLink ISC`, () => {
    const test = new LicenseProto(`ISC`)
    expect(test.getLink()).toBe(`https://opensource.org/licenses/ISC`)
})

test(`verifies getLink IBM Public License v1.0`, () => {
    const test = new LicenseProto(`IBM Public License v1.0`)
    expect(test.getLink()).toBe(`https://opensource.org/licenses/IPL-1.0`)
})

test(`verifies getDescription Apache License 2.0`, () => {
    const test = new LicenseProto(`Apache License 2.0`)
    expect(test.getDescription()).toBe(`Copyright [yyyy] [name of copyright owner] Licensed under the Apache License, Version 2.0 (the "License");you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`)
})

test(`verifies getDescription Boost`, () => {
    const test = new LicenseProto(`Boost`)
    expect(test.getDescription()).toBe(`THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`)
})

test(`verifies getDescription BSD 3-Clause License`, () => {
    const test = new LicenseProto(`BSD 3-Clause License`)
    expect(test.getDescription()).toBe(`THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE\n`)
})

test(`verifies getDescription GNU GPLv3`, () => {
    const test = new LicenseProto(`GNU GPLv3`)
    expect(test.getDescription()).toBe(`This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.\nThis program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program.\n`)
})

test(`verifies getDescription MIT`, () => {
    const test = new LicenseProto(`MIT`)
    expect(test.getDescription()).toBe(` Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n`)
})

test(`verifies getDescription ISC`, () => {
    const test = new LicenseProto(`ISC`)
    expect(test.getDescription()).toBe(`THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.\n`)
})

test(`verifies getDescription IBM Public License v1.0`, () => {
    const test = new LicenseProto(`IBM Public License v1.0`)
    expect(test.getDescription()).toBe(`THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS IBM PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT\n`)
})

