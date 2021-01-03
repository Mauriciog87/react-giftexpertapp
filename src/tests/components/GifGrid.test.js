import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'Dragon Ball';

    test('Debe mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar items cuando se cargan imágenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/imagen.png',
            title: 'Cualquier cosa'
        },
        {
            id: 'DEF',
            url: 'https://localhost/otraImagen.png',
            title: 'Cosa cualquiera'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});
