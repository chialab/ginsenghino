import chai from 'chai/chai.js';
import spies from 'chai-spies/lib/spy.js';
import chaiDom from 'chai-dom';
import chaiAsPromised from 'chai-as-promised/lib/chai-as-promised.js';
import { chaiA11yAxe } from 'chai-a11y-axe';

chai.use(spies);
chai.use(chaiDom);
chai.use(chaiAsPromised);
chai.use(chaiA11yAxe);

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should;
const spy = chai.spy;

export * from './helpers';
export { expect, assert, should, spy };
export default chai;
