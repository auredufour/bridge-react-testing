import React from 'react';
import { shallow } from 'enzyme';
import CatsList from './cats-list';
import Cat from './cat'

describe('CatsList component tests', () => {
  const props = 
   [
       {"name":"Elmira", "age":73286, "picture":"http://lorempixel.com/500/500/cats/6"},
        {"name":"Elmira", "age":73286, "picture":"http://lorempixel.com/500/500/cats/6"}
    ]

it('should render no <Cat /> component', () => {
   const wrapper = shallow(<CatsList cats={[]}/>);
   expect(wrapper.find(Cat).length).toEqual(0);
  });

it('should render two <Cat /> components', () => {
   const wrapper = shallow(<CatsList cats={props}/>);
   expect(wrapper.find(Cat).length).toEqual(2);
  });
});
