import React, { useState } from 'react'


function Testing() {
    const [tasks, setTasks] = useState([{ id: 1, taskk: 'work' }, { taskk: 'web dev', id: 2 }, { id: 3, taskk: 'project' }]);
    const [ta, setTa] = useState('');
    const [id, setid] = useState(3)
    const [valid, setvalid] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setid(id + 1)
        tasks.map(e => {
            if (e.taskk === ta) {
                setvalid(false)
            } else {
                setvalid(true)
            }
        })
        if(valid){
            setTasks((prevTasks) => [...prevTasks, { taskk: ta, id: id }]);
            setTa('');
        }else{
            alert("same task exists")
        }
    };
    return (
        <>
            <div style={{ marginTop: '3rem' }}>

                <form onSubmit={handleSubmit} className="p-5">
                    <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                            <label htmlFor="comment" className="sr-only">Your comment</label>
                            <textarea
                                id="comment"
                                value={ta}
                                onChange={(e) => setTa(e.target.value)}
                                rows="4"
                                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                placeholder="Write a comment..."
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                            <button type="submit" className="btn">
                                Add Task </button>
                        </div>
                    </div>
                    <div className="p-4 bg-slate-300 dark:bg-slate-900  rounded-lg">
                        {tasks.map(tat => (<div className="flex justify-center items-center ">
                            <div className="m-3 w-10/12 p-3 bg-slate-200 dark:bg-slate-800  rounded-md">
                                <p style={{ textDecoration: tat.style }} contentEditable={true}>{tat.taskk}</p>
                            </div>
                            <div className="btns w-1/5">
                                <button type="button" onClick={(e) => setTasks(tasks.map(task => task.id === tat.id ? { ...task, } : task))} class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</button>
                                <button data-id={tat.id} type="button" onClick={(e) => setTasks(tasks.filter(task => task.id !== Number(e.target.getAttribute('data-id'))))} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                                <button data-id={tat.id} type="button" onClick={(e) => setTasks(tasks.map(task => task.id === tat.id ? { ...task, style: 'line-through' } : task))} class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Complete</button>

                            </div>
                        </div>

                        ))}
                    </div>
                </form>
            </div>
        </>

    )

}
export default Testing
