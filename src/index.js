import './sass/main.sass'
import $ from 'jQuery'
import 'bootstrap'

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
console.log('Hello')