import React from 'react'
import './AddTodo.css';

function AddTodo() {
    return (
        <form className="list-wrapper">
            <div class="mb-3">
                <label for="todo-title" class="form-label">Todo Title</label>
                <input type="text" class="form-control" id="todo-title" aria-describedby="todo"/>
            </div>
            <div class="mb-3">
                <label for="todo-category" class="form-label">Todo Category</label>
                <input type="text" class="form-control" id="todo-category" aria-describedby="todo"/>
            </div>
            <div class="mb-3">
                <label for="todo-task" class="form-label">Todo Task</label>
                <input type="text" class="form-control" id="todo-task" aria-describedby="todo"/>
            </div>
        </form>
    )
}

export default AddTodo
