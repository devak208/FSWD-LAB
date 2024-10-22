import { useState } from 'react';

function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState(''); 

  const handleAddTask = () => {
    if (newTask.trim() === '') return; 
    const updatedTasks = [...task, { work: newTask, status: false }];
    setTask(updatedTasks);
    setNewTask(''); 
  };

  const changestatus = (index) => {
    const updatedTasks = task.map((item, i) => 
      i === index ? { ...item, status: !item.status } : item
    );
    setTask(updatedTasks);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className=' bg-slate-300 w-auto p-4 border rounded-md'>
          <div className="flex justify-center items-center gap-3 flex-col">
            <h1 className="text-blue-600 font-bold underline">My To Do List</h1>
            <div className="flex">
              <input
                type="text"
                className="text-sm py-2 w-auto px-4 border rounded-l-md"
                placeholder="Add a Task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button
                className="bg-blue-600 text-white p-2 rounded-r-md"
                onClick={handleAddTask}
              >
                ADD
              </button>
            </div>
            <hr className="text-black w-auto mx-4 h-2" />

            
          </div>
          {task
              .sort((a, b) => a.status - b.status) 
              .map((item, index) => (
                <div key={index} className="flex items-center justify-start gap-4 mt-2">
                  <input 
                    type="checkbox" 
                    checked={item.status} 
                    className="border-blue-600 bg-blue-600 w-4 h-4" 
                    onChange={() => changestatus(index)} 
                  />
                  <div className={`text-slate-800 flex-grow min-w-0 ${item.status ? 'line-through' : ''}`}>
                    {item.work}
                  </div>
                </div>
              ))}
          
        </div>
      </div>
    </>
  );
}

export default App;
