import {useState} from "react"
function Todo(){

    const [todo,setTodo]=useState([])
    function addTodo(){
        let newTodo= prompt("add your todo")
        setTodo([...todo,[newTodo]])
    }
    return(
        <>
        <div className="h-[100vh] w-[100vw] border border-red-800">
        <div className="h-[100%] w-[100%] flex justify-center items-center flex-col">

            <button className="bg-blue-400 p-3 rounded-lg text-white" onClick={addTodo}>Add Your Todo</button>
            <ul>
                {
                    todo.map((val,i)=>{
                        return <li className=" border border-red-800 m-4 p-3 rounded-md flex justify-center items-center gap-7" key={i} >{val} <button  className="bg-red-800 text-white p-3 m-1 rounded-md">delete</button> </li> 
                    })
                }
            </ul>
        </div>
        </div>
        </>
    )
}
export default Todo