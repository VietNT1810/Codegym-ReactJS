import React from 'react';

export default function Employee() {
    const employees = [
        {
            id: 1,
            name: "Hoa",
            age: 20
        },
        {
            id: 2,
            name: "Khánh",
            age: 25
        },
        {
            id: 3,
            name: "Tú",
            age: 22
        },
    ]

    const handleClick = (e) => {
        console.log(e.target.value);
    }

    return <div>
        <h1>Your </h1>
        <table border="1">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Tuổi</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, index) => {
                    return (
                        <tr>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td><button onClick={handleClick} value={index}>Detail</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>;
}
