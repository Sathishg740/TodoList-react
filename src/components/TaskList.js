import React from 'react'

function TaskList({ userFormData }) {
    console.log('data',userFormData);
    return(
        <div>
        {
            userFormData.map((user,idx)=>{
                return <div key={user+idx}>{user.task}</div>
            })
        }
        </div>
    )
}

            export default TaskList
