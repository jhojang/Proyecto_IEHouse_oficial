import { useState } from 'react'

export const useFormCheckBox = () => {
    
    const [checkboxValue, setCheckboxValue] = useState([])

    const handleInputCheckbox = ({target}) => {
        let listCheks = [];
        let flag = false;
        checkboxValue.forEach(item => {
            if (item.target.name === target.value) {
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
        console.log(listCheks);
    }

    return {
        checkboxValue,
        handleInputCheckbox
    }

}
