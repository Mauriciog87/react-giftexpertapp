import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GiftExpertApp } from '../GiftExpertApp';

describe('Pruebas en <GiftExpertApp />', () => {
    test('Debe mostrar correctamente', () => {
       const wrapper = shallow(<GiftExpertApp />);
       expect(wrapper).toMatchSnapshot();
    }); 

    test('Debe mostrar una lista de categorias', () => {
        const categories = ['Dragon Ball', 'Caballeros del Zodíaco'];
        const wrapper = shallow(<GiftExpertApp defaultCategories = {categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});
