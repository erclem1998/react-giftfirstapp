import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (element) => {
        setInputValue(element.target.value)
    }

    const handleSubmit = (e) => {
        // console.log('Submit hecho')
        
        if (inputValue.trim().length>2) {
            setCategories(cates=>[inputValue, ...cates])
            setInputValue('');
        }

        e.preventDefault();
    }

    return (

        <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
