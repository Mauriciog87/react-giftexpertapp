import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn(); 
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('Debe mostrar correctamente', () => { 
       expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto', () => {
       const input = wrapper.find('input');
       const value = 'Hola mundo';
       input.simulate('change', { target: { value }});
    });

    test('No debe postear la info on submit', () => {
       wrapper.find('form').simulate('submit', { preventDefault(){} });
       expect(setCategories).not.toHaveBeenCalled();
    });
    
    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value }});
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
    });
    
});
