import { sayHelloWorld } from '../src/index.ts'


describe('测试ts文件', () => {
    it('测试sayHelloWorld', () => {
        expect(sayHelloWorld()).toEqual('Hello word')
    })
})