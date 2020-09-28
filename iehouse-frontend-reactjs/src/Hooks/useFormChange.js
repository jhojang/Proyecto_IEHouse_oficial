import { useState } from 'react'

export const useFormChange = () => {
    const [inputValue, setInputValue] = useState({
        bulb: ''
    });
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
        // else if (target.checked === true && flag === true) {
        //     setCheckboxValue(prev => [...prev, ...listCheks]);
        //     console.log("Ya se encuentra en la lista");
        //     return false;
        // } else if (target.checked === false && flag === false) {
        //     setCheckboxValue(prev => [...prev, ...listCheks]);
        //     console.log("No esta en la lista");
        //     return false;
        // }

        setCheckboxValue(listCheks);
        listCheks=[];
        setCheckboxValue(prev => [...prev, ...listCheks]);
    }

    const handleInputSelect = ({value}) => {
        setSelectValue(value);
    }

    const resetInputValue = () => {
        setInputValue({
            bulb: ''
        });
        setCheckboxValue([]);
        setSelectValue({});
    }


    return {
        inputValue,
        checkboxValue,
        selectValue,
        setInputValue,
        setSelectValue,
        handleInputChange,
        handleInputCheckbox,
        handleInputSelect,
        resetInputValue
    };
}
