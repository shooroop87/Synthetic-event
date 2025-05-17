import React, { useState } from 'react';
import './styles.css';

export const App = () => {
    // State для отслеживания значений формы
    const [textValue, setTextValue] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [selectedRadio, setSelectedRadio] = useState('один');

    // Обработчик отправки формы
    const handleSubmit = (event) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы
        console.log('Форма отправлена!');
        console.log('Текстовое поле:', textValue);
        console.log('Чекбокс:', isChecked);
        console.log('Радио кнопка:', selectedRadio);
    };

    // Обработчик изменения текстового поля
    const handleTextChange = (event) => {
        setTextValue(event.target.value);
        console.log('Текстовое поле изменено:', event.target.value);
    };

    // Обработчик изменения чекбокса
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        console.log('Чекбокс изменен:', event.target.checked);
    };

    // Обработчик изменения радио-кнопок
    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.value);
        console.log('Радио кнопка изменена:', event.target.value);
    };

    return (
        <div className='form'>
            <h3 className='form-element'>Форма для тренировки событий</h3>
            <div className='form-element'>
                <label className='label-input'>Текстовое поле ввода:</label>
                <input 
                    type='text' 
                    required 
                    value={textValue}
                    onChange={handleTextChange}
                />
            </div>
            <div className='form-element'>
                <label className='label-input'>Чекбокс:</label>
                <input 
                    type='checkbox' 
                    required 
                    className='form-element'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
            </div>
            <fieldset className='form-element'>
                <legend>Радио кнопки</legend>
                <div>
                    <input 
                        type='radio' 
                        id='huey' 
                        name='drone' 
                        value='один' 
                        checked={selectedRadio === 'один'}
                        onChange={handleRadioChange}
                    />
                    <label htmlFor='huey'>Huey</label>
                </div>
                <div>
                    <input 
                        type='radio' 
                        id='dewey' 
                        name='drone' 
                        value='два'
                        checked={selectedRadio === 'два'}
                        onChange={handleRadioChange}
                    />
                    <label htmlFor='dewey'>Dewey</label>
                </div>
            </fieldset>
            <button onClick={handleSubmit} className='form-element'>Сабмит формы</button>
        </div>
    );
};