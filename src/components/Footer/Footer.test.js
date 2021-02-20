import { shallow } from 'enzyme'
import Footer from './Footer'
import React from 'react'

describe('Footer', () => {
  let wrapped = shallow(<Footer />)
  it('renders the Footer component correctly', () => {
    expect(wrapped).toMatchSnapshot()
  })
})
