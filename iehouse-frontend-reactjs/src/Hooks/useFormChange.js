import { useState } from 'react'

export const useFormChange = () => {
    const [inputValue, setInputValue] = useState({});
    const [checkboxValue, setCheckboxValue] = useState([]);
    const [selectValue, setSelectValue] = useState();

    const handleInputChange = ({target}) => {
        setInputValue({
            ...inputValue,
            [target.name]: target.value
        });
    }

    const handleInputCheckbox = ({target}) => {
        let listCheks = [];
        let flag = false;
        checkboxValue.forEach(item => {
            if (item.id === target.value) {
                flag = true; 
            }
        });

        if (target.checked === true && flag === false) {
            listCheks = checkboxValue;
            listCheks.push({[target.name]: target.value});
        } else if (target.checked === false && flag === true) {
            listCheks = checkboxValue.filter(item =>(
                item.id !== target.value
            ));
        }

        setCheckboxValue(listCheks);
    }

    const handleInputSelect = ({value}) => {
        setSelectValue(value);
    }

    const resetInputValue = () => {
        setInputValue({});
        setCheckboxValue({});
        setSelectValue({});
    }


    return {
        inputValue,
        checkboxValue,
        selectValue,
        handleInputChange,
        handleInputCheckbox,
        handleInputSelect,
        resetInputValue
    };
}
