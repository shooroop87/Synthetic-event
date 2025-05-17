import './styles.css';
import React, { useState } from 'react';

export const App = () => {
	const [textValue, setTextValue] = useState('');
	const [isChecked, setIsChecked] = useState(false);
	const [radioValue, setRadioValue] = useState('один');

	// отправка формы
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Форма отправлена', {
			textValue,
			isChecked,
			radioValue
		});
	};

	// изменение текстового поля
	const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setTextValue(newValue);
		console.log('Текстовое поле:', newValue);
	};

	// изменение чекбокса
	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newChecked = e.target.checked;
		setIsChecked(newChecked);
		console.log('Чекбокс:', newChecked);
	};

	// изменение радио-кнопок
	const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newRadioValue = e.target.value;
		setRadioValue(newRadioValue);
		console.log('Радио выбрано:', newRadioValue);
	};

	return (
		<form className='form' onSubmit={handleSubmit}>
			<h3 className='form-element'>Форма для тренировки событий</h3>

			<div className='form-element'>
	<label className='label-input'>Текстовое поле ввода:</label>
	<input
		type='text'
		required
		value={textValue}
		onInput={handleTextInput}
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
						checked={radioValue === 'один'}
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
						checked={radioValue === 'два'}
						onChange={handleRadioChange}
					/>
					<label htmlFor='dewey'>Dewey</label>
				</div>
			</fieldset>

			<button type='submit' className='form-element'>Сабмит формы</button>
		</form>
	);
};