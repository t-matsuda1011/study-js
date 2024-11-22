document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    // ローカルストレージからタスクを取得して表示
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    tasks.forEach(addTaskToDOM);
  
    // タスクをフォームから追加
    taskForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const taskText = taskInput.value;
      const task = { text: taskText, completed: false };
  
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
  
      addTaskToDOM(task);
      taskInput.value = '';
    });
  
    // タスクをDOMに追加
    function addTaskToDOM(task) {
      const li = document.createElement("li");
      li.className = "task";
      if (task.completed) {
        li.classList.add("completed");
      }
      li.innerHTML = `
        <span>${task.text}</span>
        <button class="completeTask">完了</button>
        <button class="deleteTask">削除</button>
      `;
      taskList.appendChild(li);
  
      // 完了ボタンの機能
      li.querySelector('.completeTask').addEventListener('click', () => {
        task.completed = !task.completed;
        li.classList.toggle('completed');
        localStorage.setItem('tasks', JSON.stringify(tasks));
      });
  
      // 削除ボタンの機能
      li.querySelector('.deleteTask').addEventListener('click', () => {
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskList.removeChild(li);
      });
    }
  });
  