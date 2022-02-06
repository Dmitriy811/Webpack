import './sass/main.sass'
import $ from 'jQuery'
const obj1 = {
	language: 'javascript',
	framework: 'react'
}

const obj2 = {
	name: 'Dima',
	...obj1
}

$('.box1').html('Some Text')

console.log(obj2)