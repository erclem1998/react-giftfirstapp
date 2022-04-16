import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';



describe('Pruebas en GifGridItem', () => {  

    const titleTest = 'One Punch';
    const url ='algo.com';
    const wrapper = shallow(<GifGridItem 
                                title={titleTest} 
                                url={url}
                            />
                        );

    test('Debe mostrar el componente correctamente', () => {  
        
        expect(wrapper).toMatchSnapshot();

    });

    test('Debería tener un parrafo con el titulo', () => {  

        const p = wrapper.find('p').text().trim();
        expect(p).toBe(titleTest)

    })

    test('Debe de tener la imagen igual al url y alt de los props', () => {  
        const img = wrapper.find('img');
        expect(img.props().src).toBe(url) // o img.props().src
        expect(img.prop('alt')).toBe(titleTest)
    })

    test('Debe tener animate__fadeIn', () => {  
        const div = wrapper.find('div');
        const animateClass = div.prop('className').includes('animate__fadeIn');
        expect(animateClass).toBe(true)
    })

});