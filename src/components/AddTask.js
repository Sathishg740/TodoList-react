import { useState } from "react";
function UseForm(props) {
    const [userData, setuserData] = useState({
        task:''
})
console.log(userData);
let updateUserData=(event)=>{
    setuserData({
        ...userData,
        [event.target.name]:event.target.value,
    })
}

let saveData=()=>{
     props.getUserData(userData)
     //clearing the form
     setuserData({
            task:''
     })
}

    return (
        <div className="container">
            <h2>Todo List</h2>
                <div className="mb-3">
                    <input
                    name="task"
                    type="text"
                    className="form-control"
                    placeholder="Enter Task"
                    value={userData.task}
                    onChange={(event)=>{updateUserData(event)}}
                    />
                
                </div>
                <button type="submit" className="btn btn-primary" onClick={saveData}>Save</button>
                
        </div>
    )
}

export default UseForm