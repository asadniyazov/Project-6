import React, { useEffect, useState } from 'react'

function Admin() {
    const [Category, setCategory] = useState([])
    const [Search, setSearch] = useState('')
    useEffect(() => {
        GetProduct()
    }, [])
    async function GetProduct() {
        const res = await fetch("http://localhost:3000/course")
        const data = await res.json()
        setCategory(data)
    }
    async function DeleteProduct(id) {
        const res = await fetch("http://localhost:3000/course/" + id, { method: "delete" })
        GetProduct()
    }
    function Sorted() {
        return  setCategory([...Category.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))])
         
    }
    return (
        <>
        <input value={Search} onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={()=>Sorted()}>A-z</button>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>CourseName</th>
                        <th>CourseImg</th>
                        <th>Course Description</th>
                        <th>Teacher Img</th>
                        <th>Teacher Name</th>
                        <th>Teacher Position</th>

                        <th>Course Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Category.filter((x)=>x.name.toLowerCase().includes(Search.toLowerCase()))
                        .map((x) => <>
                            <tr key={x._id}>
                                <td>{x._id}</td>
                                <td>{x.name}</td>
                                <td>{x.CourseImg}</td>
                                <td>{x.Des}</td>
                                <td>{x.TeacherImg}</td>
                                <td>{x.TeacherName}</td>
                                <td>{x.positions}</td>
                                <td>{x.price}</td>
                                <td>

                                    <button onClick={() => DeleteProduct(x._id)}> Delete</button>
                                </td>

                            </tr>
                        </>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Admin