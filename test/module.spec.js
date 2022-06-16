import chai, { expect, assert, should, spy, wait } from '@chialab/ginsenghino';

describe('ginsenghino', () => {
    it('should export "chai" framework', () => {
        expect(typeof chai).to.be.equal('object');
    });

    it('should export "assert" method', () => {
        expect(typeof assert).to.be.equal('function');
    });

    it('should export "expect" method', () => {
        expect(typeof expect).to.be.equal('function');
    });

    it('should export "should" method', () => {
        expect(typeof should).to.be.equal('function');
    });

    it('should export "spy" method', () => {
        expect(typeof spy).to.be.equal('function');
    });

    it('should export "wait" method', () => {
        expect(typeof wait).to.be.equal('function');
    });

    it('should support spied function assetions', () => {
        const fn = spy();
        fn();

        expect(fn).to.have.been.called();
    });

    it('should support promises assertions', async () => {
        const promise = Promise.resolve(42);

        await expect(promise).to.eventually.equal(42);
    });

    it('should wait a timeout', async () => {
        const time = Date.now();
        await wait(1000);

        expect(Date.now() - time).to.be.gte(1000);
    });
});
