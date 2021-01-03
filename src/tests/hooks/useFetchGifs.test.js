import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook de useFetchGifs', () => {
    test('Debe devolver el estado inicial', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe devolver un arreglo de imgs y loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));

        await waitForNextUpdate();
        
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
});
