const StudentsInfo = () => {
    const students = [
        {
            id: 1,
            name: "Nguyễn Văn A",
            age: 30,
            address: "Hà nội",
        },
        {
            id: 2,
            name: "Nguyễn Văn B",
            age: 32,
            address: "Hà tây",
        },
        {
            id: 3,
            name: "Nguyễn Văn C",
            age: 34,
            address: "Hà đông",
        },
    ];
    return (
        <>
            <table border="1">
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </thead>
                <tbody>
                    {students.map((student, index) => {
                        return (
                            <tr key={index}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};

export default StudentsInfo;