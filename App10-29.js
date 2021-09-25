/* REACT */
/* Уроки 10 - 29 */

import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
 

function App() {

	/* Задача 10.1 */
	/* Задача 10.2 */
	function getDigitsSum(num) {
		let sum = 0, x = String(num);
     
    for (let i = 0; i < x.length; i++) {
        sum += Number(x[i]);
    }
    	return(sum)
	}			

	const sum = getDigitsSum(123)

	/* Задача 11.1 */
	function show1() {
		alert(1);
	}
	function show2() {
		alert(2);
	}

	/* Задача 11.2 */
	function show(n) {
		alert(n);
	}

	/* Задача 12.1 */
	/* Задача 12.2 */
	function func(event) {
		console.log(event)
		console.log(event.target);
	}

	/* Задача 13.1 */
	const arr = [
		<li>1</li>,
		<li>2</li>,
		<li>3</li>,
		<li>4</li>,
		<li>5</li>,
	];

	/* Задача 13.2 */
	const arr2 = [];
	for (let i = 0; i <= 9; i++) {
		arr2.push(<li>{i}</li>);
	}

	/* Задача 13.3 
	   Задача 13.4 */
	const arr3 = ['a', 'b', 'c', 'd', 'e'];
	const res = arr3.map(function(item, index) {
		return <li key={index}>{item}</li>;
	});

	/* Задача 14.1 
	   Задача 14.2*/
	const users = [
		{id: 1, name: 'user1', surn: 'surn1', age: 30},
		{id: 2, name: 'user2', surn: 'surn2', age: 31},
		{id: 3, name: 'user3', surn: 'surn3', age: 32},
	];
	const res2 = users.map(function(item) {
		return <li key={item.id}>{item.name} {item.surn} {item.age}</li>;
	});

	/* Задача 15.1 */
	const res3 = users.map(function(item) {
		return <tr key={item.id}>
				<td>{item.name}</td> 
				<td>{item.surn}</td>
				<td>{item.age}</td>
			</tr>
	});

	/* Задача 16.4 */
	const users2 = [
		{id: uuidv4(), name: 'user1', surn: 'surn1', age: 30},
		{id: uuidv4(), name: 'user2', surn: 'surn2', age: 31},
		{id: uuidv4(), name: 'user3', surn: 'surn3', age: 32},
	];

	const res4 = users2.map(function(item) {
		return <tr>
				<td>{item.name}</td> 
				<td>{item.surn}</td>
				<td>{item.age}</td>
			</tr>
	});

	/* Задача 17.1 
	   Задача 17.2 */
	let [name, setName] = useState('Petya');
	let [surname, setSurName] = useState('Petrov');
	let [age, setAge] = useState('25');

	/* Задача 17.3 */
	let [ban, setBan] = useState(true);

	/* Задача 18.1 */
	const [value, setValue] = useState('');
	const [value2, setValue2] = useState('');

	/*  Задача 18.2 */
	const [value3, setValue3] = useState('');

	/* Задача 18.3 */
	const [birthday, setBirthday] = useState('24');

	function getYear() {
		return new Date().getFullYear() - birthday;
	}

	/* Задача 18.4 */
	const [fahrenheit, setCelcius] = useState('77');

	function getCelcius() {
		return (fahrenheit - 32) * 5 / 9;
	}

	const [input1, setInput1] = useState('');
	const [input2, setInput2] = useState('');
	const [input3, setInput3] = useState('');
	const [input4, setInput4] = useState('');
	const [input5, setInput5] = useState('');

	function handleChange1(event) {
		setInput1(+event.target.value);
	}
	function handleChange2(event) {
		setInput2(+event.target.value);
	}
	function handleChange3(event) {
		setInput3(+event.target.value);
	}
	function handleChange4(event) {
		setInput4(+event.target.value);
	}
	function handleChange5(event) {
		setInput5(+event.target.value);
	}
	
	/* Задача 19.1 */
	const [num1, setNum1] = useState('');
	const [num2, setNum2] = useState('');
	const [result, setResult] = useState('');
	const [result2, setResult2] = useState('');

	/* Задача 19.4 */
	const [num3, setNum3] = useState('44');

	function getDigitsSum2(num) {
		let sum = 0, x = String(num);
     
    for (let i = 0; i < x.length; i++) {
        sum += Number(x[i]);
    }
    	return(sum)
	}	

	/* Задача 20.1 */
	const [textareaValue, setTextareaValue] = useState('');

	function translit(textareaValue){
		let answer = '';
		const converter = {
			'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
			'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
			'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
			'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
			'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
			'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
			'э': 'e',    'ю': 'yu',   'я': 'ya',
	 
			'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
			'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
			'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
			'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
			'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
			'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
			'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
		};
	 
		for (let i = 0; i < textareaValue.length; ++i ) {
			if (converter[textareaValue[i]] == undefined){
				answer += textareaValue[i];
			} else {
				answer += converter[textareaValue[i]];
			}
		}
		return answer;
	}

	/* Задача 21.1 */
	const [checked, setChecked] = useState(true);

	/* Задача 21.2 */
	const [checked1, setChecked1] = useState(true);
	const [checked2, setChecked2] = useState(true);
	const [checked3, setChecked3] = useState(false);

	/* Задача 21.3 */
	const [checked4, setChecked4] = useState(true);

	let message;
	if (checked4) {
		message = <div>
		<h2>Ура, вам уже есть 18</h2>
		<p>
			здесь расположен контент только для взрослых
		</p>
	</div>;
	} else {
		message = <div>
		<p>
			увы, вам еще нет 18 лет:(
		</p>
	</div>;
	}

	/* Задача 21.4 */
	const [checked5, setChecked5] = useState(true);

	let msg;
	if (checked5) {
		msg = <p>Абзац теперт виден</p>
	} else {
		msg = ''
	}

	/* Задача 22.1 */
	const [selectValue, setSelectValue] = useState('');
	
	function handleChangeSelect(event) {
		setSelectValue(event.target.value);
	}

	/* Задача 22.2 */
	const texts = ['Москва', 'Питер', 'Краснодар', 'Уфа'];
	const [selectValue2, setValueSelect2] = useState('');
	
	const options = texts.map((text, index) => {
		return <option key={index}>{text}</option>;
	});

	/* Задача 22.3 */
	const [ageValue, setAgeValue] = useState('');

	/* Задача 23.1 */
	const [radioValue, setRadioValue] = useState();
	
	function changeHandlerRadio(event) {
		setRadioValue(event.target.value);
	}

	/* Задача 23.2 */
	const [radioValue2, setRadioValue2] = useState();
	
	function changeHandlerRadio2(event) {
		setRadioValue2(event.target.value);
	}

	let radioMsg;
	if (radioValue2 === '1') {
		radioMsg = <p>JAVA</p>
	} else if  (radioValue2 === '2') {
			radioMsg = <p>C++</p>
	} else {
		radioMsg = <p>JS и вы большой молодец!</p> 
	}

	/* Задача 25.1 */
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const copy = Object.assign([], notes);
	let sum2 = copy.length + 1;

	function addArray() {
		copy.push(sum2);
		sum2 += 1
		console.log(copy)

	}

	/* Задача 25.2 */
	let index = 2
	function deleteElemInArray() {
		copy.splice(index, 1);
		console.log(copy)
	}

	/* Задача 25.3 */
	let index2 = 4
	function changeElemInArray() {
		copy[index2] = '!';
		console.log(copy)
	}

	/* Задача 25.4 */
	function sortingArray() {
		copy.reverse();
		console.log(copy)
	}

	/* Задача 26.1 */
	/* Задача 26.2 */
	const [notes4, setNotes4] = useState(['a', 'b', 'c', 'd', 'e']);
	let [notesValue4, setValue4] = useState('');

	const result4 = notes4.map((note, index) => {
		return <ul><li key={index}>{note}</li></ul>;
	});

	function addNoteItem(event) {
		setNotes4([...notes4, notesValue4])
		setValue4(event.target.value = '')
	}
	function changeInputValue(event) {
		setValue4(event.target.value)
	}

	/* Задача 27.1 */
	const result5 = notes4.map((note, index) => {
		return <ul><li key={index}>{note} <button onClick={() => remItem(index)}>Удалить</button></li></ul>

	});
	function remItem(index) {
		setNotes4([...notes4.slice(0, index), ...notes4.slice(index + 1)]);
	}

	/* Задача 28.1 */
	const [notes6, setNotes6] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	function changeHandlerNotes6(index, event) {
		setNotes6([...notes6.slice(0, index), event.target.value, ...notes6.slice(index + 1)]);
	}
	
	function getSum(arr) {
		let sum = 0;
     
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    	return(sum / arr.length)
	}

	const result6 = notes6.map((note, index) => {
		return <input
			key={index}
			value={note}
			onChange={event => changeHandlerNotes6(index, event)}
		/>;
	});

	/* Задача 29.1 
	   Задача 29.2*/
	const [notes7, setNotes7] = useState(['a', 'b', 'c', 'd', 'e']);
	const [editNum, setEditNum] = useState(null);

	const result7 = notes7.map((note, index) => {
		return <ul><li key={index}>{note} <button onClick={() => setEditNum(index)}>Редактировать</button></li></ul>	
	});

	function changeItem7(event) {
		setNotes7([...notes7.slice(0, editNum), event.target.value, ...notes7.slice(editNum + 1)]);
	}

	function clearInputValue(event) {
		setEditNum(event.target.value = '')
	}


	return <div>

	{/* Задача 10.1 */}
		{sum}
		<br />
		
	{/* Задача 10.2 */}
		{getDigitsSum(12345)}
		<br />

	{/* Задача 11.1 */}	
		<button onClick={show1}>act1</button>
		<button onClick={show2}>act2</button>
		<br />

	{/* Задача 11.2 */}
		<button onClick={() => show('1')}>act1</button>
		<button onClick={() => show('2')}>act2</button>
		<button onClick={() => show('3')}>act3</button>
		<br />

	{/* Задача 12.1 */
	 /* Задача 12.2 */}
		<button onClick={func}>act</button>

	{/* Задача 13.1 */}
		{arr}
		<br />

	{/* Задача 13.2 */}
		{arr2}
		<br />

	{/* Задача 13.3 */}
		{res}
		<br />

	{/* Задача 14.1 */}	
		{res2}
		<br />

	{/* Задача 15.1 */}	
	<table>
		<thead>
			<tr>
				<td>Имя</td>
				<td>Фамилия</td>
				<td>Возраст</td>
			</tr>
		</thead>
		<tbody>
			{res3}
		</tbody>
	</table>
	<br />

	{/* Задача 16.4 */}
		{res4}

	{/* Задача 17.1 
		Задача 17.2 */}
	{name} - {surname} - {age}
	<br />
	<button onClick={() => setName('Ivan')}>Поменять имя</button>
	<button onClick={() => setSurName('Ivanov')}>Поменять Фаимилию</button>	

	{/* Задача 17.3 */}
	<span>{ban ? 'забанен' : 'не забанен'}</span>

	{/* Задача 17.4 */}
	<button onClick={() => setBan(!ban)}>Забанить/Разбанить</button>

	{/* Задача 17.6 */}
	<button onClick={() => setAge(+age +1)}>Возраст +1</button>
	<button onClick={() => setAge(age - 1)}>Возраст -1</button>
	<br />

	{/* Задача 18.1 */}
	<input value={value} onChange={event => setValue(event.target.value)} />
	<p>text: {value}</p>
	<input value={value2} onChange={event => setValue2(event.target.value)} />
	<p>text: {value2}</p>

	{/*  Задача 18.2 */}
	<input value={value3} onChange={event => setValue3(event.target.value)} />
	<p>text: {value3.length} символов в инпуте</p>

	{/* Задача 18.3 */}
	<input value={birthday} onChange={event => setBirthday(event.target.value)} />
	<p>{getYear(birthday)} год рождения</p>

	{/* Задача 18.4 */}
	<input value={fahrenheit} onChange={event => setCelcius(event.target.value)} />
	<p>{getCelcius(fahrenheit)} цельсий</p>

	<input value={input1} onChange={handleChange1} />
	<input value={input2} onChange={handleChange2} />
	<input value={input3} onChange={handleChange3} />
	<input value={input4} onChange={handleChange4} />
	<input value={input5} onChange={handleChange5} />

	<p>result: {(input1 + input2 + input3 + input4 + input5) / 5}</p>

	{/* Задача 19.1 */}
	<input value={num1} onChange={event => setNum1(event.target.value)} />
	<input value={num2} onChange={event => setNum2(event.target.value)} />
	<button onClick={() => setResult(Number(num1) + Number(num2))}>Сумма чисел</button>
	<button onClick={() => setResult2(Number(num1) * Number(num2))}>Произведение чисел</button>

	<p>сумма - {result}</p>
	<p>произ. - {result2}</p>

	{/* Задача 19.4 */}
	<input value={num3} onBlur={event => setNum3(event.target.value)} />
	<p>Cуммa цифр введенного числа - {getDigitsSum2(num3)}</p>

	{/* Задача 20.1 */}
	<textarea value={textareaValue} onChange={event => setTextareaValue(event.target.value)} />
	<p>{translit(textareaValue)}</p>

	{/* Задача 21.1 */}
	<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
	<button onClick={() => setChecked(!checked)}>Hello\Goodbye</button>
	<p>состояние: {checked ? 'Hello user' : 'Goodbye user'}</p>

	{/* Задача 21.2 */}
	Что из этого вы знаете? <input type="checkbox" checked={checked1} onChange={() => setChecked1(!checked1)} />html
	<input type="checkbox" checked={checked2} onChange={() => setChecked2(!checked2)} />css
	<input type="checkbox" checked={checked3} onChange={() => setChecked3(!checked3)} />js
	<p>html {checked1 ? 'знаю' : ''}</p>
	<p>css {checked2 ? 'знаю' : ''}</p>
	<p>js {checked3 ? 'знаю' : ''}</p>

	{/* Задача 21.3 */}
	Вам есть 18? <input type="checkbox" checked={checked4} onChange={() => setChecked4(!checked4)} />
	<div>{message}</div>

	{/* Задача 21.4 */}
	Показать скрыть абзац <input type="checkbox" checked={checked5} onChange={() => setChecked5(!checked5)} />
	<p>{msg}</p>

	{/* Задача 22.1 */}
	<select value={selectValue} onChange={handleChangeSelect}>
			<option>Москва</option>
			<option>Питер</option>
			<option>Краснодар</option>
			<option>Уфа</option>
		</select>
		<p>
			ваш выбор: {selectValue}
		</p>

	{/* Задача 22.2	 */}
	<select value={selectValue2} onChange={(event) => setValueSelect2(event.target.value)}>
			{options}
		</select>
		<p>
			ваш выбор: {selectValue2}
		</p>

	{/* Задача 22. */}
	Укажите свой возраст <select value={ageValue} onChange={event => setAgeValue(event.target.value)}>
			<option value="1">до 12</option>
			<option value="2">от 13 до 17</option>
			<option value="3">от 18 до 25</option>
			<option value="4">старше 25</option>
		</select>
		<p>
			{ageValue === '1' && 'вам не больше 12'}
			{ageValue === '2' && 'вам не больше 17'}
			{ageValue === '3' && 'вам не больше 25'}
			{ageValue === '4' && 'вам больше 25'}

		</p>

	{/* Задача 23.1 */}
	<input
			type="radio"
			name="radio"
			value="1"
			checked={radioValue === '1' ? true : false}
			onChange={changeHandlerRadio}
		/>
		<input
			type="radio"
			name="radio"
			value="2"
			checked={radioValue === '2' ? true : false}
			onChange={changeHandlerRadio}
		/>
		<input
			type="radio"
			name="radio"
			value="3"
			checked={radioValue === '3' ? true : false}
			onChange={changeHandlerRadio}
		/>
		<p>{radioValue}</p>

		{/* Задача 23.2 */}
		<input
			type="radio"
			name="radio"
			value="1"
			checked={radioValue2 === '1' ? true : false}
			onChange={changeHandlerRadio2}
		/>JAVA
		<input
			type="radio"
			name="radio"
			value="2"
			checked={radioValue2 === '2' ? true : false}
			onChange={changeHandlerRadio2}
		/>C++
		<input
			type="radio"
			name="radio"
			value="3"
			checked={radioValue2 === '3' ? true : false}
			onChange={changeHandlerRadio2}
		/>JS
		{radioMsg}

		{/* Задача 25.1 */}
		<button onClick={addArray}>Add to array</button>

		{/* Задача 25.2 */}
		<button onClick={deleteElemInArray}>Delete elem from array</button>
		
		{/* Задача 25.3 */}
		<button onClick={changeElemInArray}>Change elem in array</button>

		{/* Задача 25.4 */}
		<button onClick={sortingArray}>Sort array</button>
		<br />
		
		{/* Задача 26.1 */}
		<input value={notesValue4} onBlur={addNoteItem} onChange={changeInputValue}/>
	
		{result4}

		{/* Задача 27.1 */}
		{result5}

		{/* Задача 28.1 */} 
		{result6}
		{getSum(notes6)}

		{/* Задача 29.1 */}
		{result7}
		<input value={editNum ? notes7[editNum] : ''} onChange={changeItem7} onBlur={clearInputValue}/>
	</div>;
}

export default App;
