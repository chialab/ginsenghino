import chai, { expect, assert, should, spy, wait, waitEvent } from '@chialab/ginsenghino';

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

    it('should export strings methods', () => {
        expect(typeof assert.startsWith).to.be.equal('function');
        expect(typeof assert.endsWith).to.be.equal('function');
        expect(typeof assert.equalIgnoreCase).to.be.equal('function');
        expect(typeof assert.equalIgnoreSpaces).to.be.equal('function');
        expect(typeof assert.containIgnoreSpaces).to.be.equal('function');
        expect(typeof assert.containIgnoreCase).to.be.equal('function');
        expect(typeof assert.singleLine).to.be.equal('function');
        expect(typeof assert.reverseOf).to.be.equal('function');
        expect(typeof assert.palindrome).to.be.equal('function');
        expect(typeof assert.entriesCount).to.be.equal('function');
        expect(typeof assert.indexOf).to.be.equal('function');
    });

    it('should export promise methods', () => {
        expect(typeof assert.isFulfilled).to.be.equal('function');
        expect(typeof assert.isRejected).to.be.equal('function');
        expect(typeof assert.becomes).to.be.equal('function');
        expect(typeof assert.doesNotBecome).to.be.equal('function');
        expect(typeof assert.eventually).to.be.equal('object');
    });

    it('should export a11y methods', () => {
        expect(typeof assert.isAccessible).to.be.equal('function');
        expect(typeof assert.isNotAccessible).to.be.equal('function');
    });

    it('should export "wait" method', () => {
        expect(typeof wait).to.be.equal('function');
    });

    it('should export "waitEvent" method', () => {
        expect(typeof waitEvent).to.be.equal('function');
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

    it('should wait a target fires an event', async () => {
        const target = new EventTarget();
        const promise = waitEvent(target, 'event');
        target.dispatchEvent(new Event('event'));

        expect(await promise).to.not.be.null;
    });
});
