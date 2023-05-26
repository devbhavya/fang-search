import "./EmployeeTable.css";
const EmployeeTable = (props) =>{
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
    return(
        <div className="table-container">
            <table class="table">
            <thead>
                <tr>
                    <th>SI.NO:</th>
                    <th>Employee</th>
                    <th>Schedule</th>
                    <th>Date Of Birth</th>
                    <th id="status">Status</th>
                    <th id="Actions-Header">Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                        props.EmployeeData.map((employee) =>(
                            <tr>
                                <td>{employee.id}</td>
                                <td><i class="bi bi-person-circle"></i><p className="Table-Employee-Name">{employee.name}</p></td>
                                <td>{employee.schedule}</td>
                                <td>{monthNames[employee.dob.getMonth()-1]} {employee.dob.getDate()}</td>
                                <td >
                                    <button className={`status-button ${employee.status==="Inactive" ?'inactive':'active'}`}>{employee.status}</button>
                                </td>
                                <td>
                                <button className="actions-button"><i class="bi bi-pencil-fill"></i></button>
                                <button className="actions-button"><i class="bi bi-three-dots"></i></button>
                                </td>
                            </tr>
                        ))
                    }
            </tbody>
        </table>
        </div>
    
    );
};
export default EmployeeTable;