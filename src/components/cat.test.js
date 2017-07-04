import React from 'react';
import { shallow } from 'enzyme';
import Cat from './cat';

describe('cat component tests', () => {
  const props = {
    name: 'Snuggles',
    picture: 'https://picsofsnugglez.com/1',
    age: 3,
    breed: 'Siamese'
  }

  it('should render the cats name', () => {
    const wrapper = shallow(<Cat { ...props } />);
    const name = 'Snuggles';

    expect(wrapper.contains(name)).toEqual(true);
  });

  it('should render the cats image', () => {
    const wrapper = shallow(<Cat { ...props } />);
    const image = <img className='cat-img' src={ props.picture } />;

    expect(wrapper.contains(image)).toEqual(true);
  });

  it('should render the cats breed', () => {
    const wrapper = shallow(<Cat { ...props } />);
    const breed = 'Siamese';

    expect(wrapper.contains(breed)).toEqual(true);
  });

  it('should render the cats age', () => {
    const wrapper = shallow(<Cat { ...props } />);
    const age = 3;

    expect(wrapper.contains(age)).toEqual(true);
  });
})