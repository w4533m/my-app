import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hero from "./Hero";
import HeroImage from "../images/hero.jpg";
import {shallow} from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



describe("<Hero />", () => {
    it("renders an image", () => {
        const hero = shallow(<Hero />);
        expect(hero.find("img").prop("src")).toEqual(heroImage);

     });
 });


