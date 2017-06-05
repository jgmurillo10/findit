/* eslint-env mocha */

import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';
import Program from './Results.jsx';

describe('Results', () => {
  it('should render', () => {
    const programtest = Factory.create('programtest');
    const item = shallow(<Program program={programtest} />);

  //  console.log(item.debug());
    chai.assert.equal(item.instance().props.program.name, 'TestProgram');
    chai.assert.equal(item.instance().props.program.url, 'google.com');

    chai.assert.equal(item.instance().props.program.description, 'testing');
  });
});
