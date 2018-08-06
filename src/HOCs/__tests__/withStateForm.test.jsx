import React, { Component } from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withStateForm from '../withStateForm';

Enzyme.configure({adapter: new Adapter()});

const TestFormWithStateForm = withStateForm(() => <form {...this.props}></form>);

const ElementProps = {
  name: 'foo',
  value: 'bar'
}

test('State is synced with the form', () => {
  const component = shallow(<TestFormWithStateForm />)
  component.simulate('change', {target: ElementProps});
  expect(component.state()[ElementProps.name]).toBe(ElementProps.value)
});

test('Form values are correctly passed to onFormSet', () => {
  const mockFormSet = jest.fn();
  const component = shallow(<TestFormWithStateForm onFormSet={mockFormSet} />)
  component.simulate('change', {target: ElementProps});
  component.simulate('submit', {preventDefault: () => {}})

  expect(mockFormSet.mock.calls.length).toBe(1);
  expect(mockFormSet.mock.calls[0][0]).toEqual({
    [ElementProps.name]: ElementProps.value
  })
})