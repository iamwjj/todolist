import Vue from 'vue';

import './css/index.css';

new Vue({
	el:'#todoapp',
	data:{
		title:'todos',
		newTodo:"",
		todos:[
			{text:"吃饭", completed:false},
			{text:"睡觉", completed:false},
			{text:"学习", completed:false},
		],
		allDone:false,
	},
	methods:{
		addTodo(){
			let val = this.newTodo && this.newTodo.trim();
			if(!val){
				return 
			}
			this.todos.push({
				text: val,
				completed: false
			})
			this.newTodo = "";
		},
		removeTodo(todo){
			this.todos.splice(this.todos.indexOf(todo), 1);
		}
	}
})