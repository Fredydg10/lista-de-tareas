document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newTaskInput = document.getElementById('new-task');
        const newTaskText = newTaskInput.value.trim();

        if (newTaskText !== '') {
            const newTask = document.createElement('li');
            newTask.textContent = newTaskText;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'x';
            deleteButton.classList.add('delete-btn');
            newTask.appendChild(deleteButton);

            taskList.appendChild(newTask);

            newTaskInput.value = '';
        }
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const task = e.target.parentElement;
            taskList.removeChild(task);
        } else if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed');
        }
    });
});
