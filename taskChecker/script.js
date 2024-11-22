document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const addTask = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    taskForm.addEventListener("submit", (e) => {
        if(addTask !== ""){
            e.preventDefault();

            const li = document.createElement("li");
            li.classList.add("taskItem");
            //全体をまとめるためのliを始めに生成
    
            const taskText = document.createElement("p");
            taskText.textContent = addTask.value;
            taskText.classList.add("taskText");
            li.appendChild(taskText);
            //入力値をtaskTextで受け取って、liに入れる
    
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("checkbox");
            li.appendChild(checkbox);
            //チェックボックスを生成し、liに入れる
    
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "×";
            deleteBtn.classList.add("delete");
            li.appendChild(deleteBtn);
            //削除ボタンを生成し、liに入れる
    
            taskList.appendChild(li);
            //文字とチェックボックスと削除ボタンを入れたliを、元からHTMLに配置してあるリストに入れる
        }
    })

    taskList.addEventListener("click", (e) => {
        if(e.target.classList.contains("delete")) {
            const li = e.target.parentElement;
            taskList.removeChild(li);
        }
    })
});