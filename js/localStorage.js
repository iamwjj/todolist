let STORAGE_KEY = 'vue-todolist';
let todoStorage = {
	fetch(){
		let todos = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
		return todos;
	},
	save(todos){
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
	}
}

export default todoStorage;