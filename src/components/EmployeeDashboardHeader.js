import "./EmployeeDashboardHeader.css";
import EmployeeTable from "./EmployeeTable";
const EmployeeDashboardHeader = (props) =>{
    const Data=props.details;
    return(
        <div className="Employee-Dashboard-Header">
            <p className="Text">Employee Dashboard</p>
            <EmployeeTable EmployeeData={Data}></EmployeeTable>
        </div>
        
    );
};
export default EmployeeDashboardHeader;