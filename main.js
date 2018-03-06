import Vue from 'vue';

import './css/index.css';

import todoStorage from './js/localStorage';
import filters from './js/filters';

let app = new Vue({
	el:'#todoapp',
	data:{
		title: 'todos',
		newTodo: "",
		todos: todoStorage.fetch()||[],
		visibility:'all',
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
		},
		clearCompleted(){
			this.todos = filters.active(this.todos);
		}
	},
	watch:{
		todos:{
			handler(todos){
				todoStorage.save(todos);
			},
			deep:true
		}
	},
	computed:{
		filterTodos(){
			return filters[this.visibility](this.todos);
		},
		remaining(){
			return filters.active(this.todos).length;
		},

		allDone:{
			get:function(){
				return this.remaining === 0;
			},
			set:function(val){
				this.todos.forEach((item)=>{
					item.completed = val;
				})
			}
		}
	},
	filters:{
		pluralize(num){
			return num == 1 ? 'item':'items';
		}
	}
})

window.addEventListener('hashchange',() => {
	let hash = window.location.hash;
	let visibility = hash.replace(/#\/?/,'');
	app.visibility = visibility;
})