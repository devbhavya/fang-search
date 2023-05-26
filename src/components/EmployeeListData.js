import "./EmployeeListData.css";
const EmployeeListData = (props) =>{
    return(
        <div className="Employee_List-Data-Container">
            <i  id="EmployeeProfile" class="bi bi-person-circle fa-3x"></i>
            <p id="Employee-List-Employee-Name">Derrick B.Bendel</p>
            <p id="Employee-List-Employee-Schedule">Morning Shift</p>
            <p id="Employee-List-Employee-Dob">DOB</p>
            <hr id="Horizontal-Line"></hr>
        </div>
    )
};
export default EmployeeListData;