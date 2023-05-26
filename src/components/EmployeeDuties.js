import "./EmployeeDuties.css";
const EmployeeDuties = () =>{
    const EmployeeTimings=[
        {
            id:'101',
            timing:'6:00 to 12:00pm',
            count:28,
            timingStatus:'Standard',
        },
        {
            id:'102',
            timing:'4:00 to 11:00pm',
            count:16,
            timingStatus:'Early'
        },
        {
            id:'103',
            timing:'6:00 to 12:00pm',
            count:36,
            timingStatus:'On Call'
        },
    ]
    return(
        <div className="Employee-Duties-Container">
            <p id="Employee-Duties-Header-Text">Duties</p>
            <div className="Employee-Duties-ChlidDiv1">
                <p className="Employee-Duties-ChlidDiv-Header" ><i id="Div1-circle" class="bi bi-circle-fill"></i>{EmployeeTimings[0].timingStatus}</p>
                <p className="Employee-Duties-ChlidDiv-DemoText">{EmployeeTimings[0].timing}</p>
                <p id="Employee-Duties-ChlidDiv1-Count">{EmployeeTimings[0].count}</p>
            </div>
            <div className="Employee-Duties-ChlidDiv2">
            <p className="Employee-Duties-ChlidDiv-Header" ><i id="Div2-pentagon" class="bi bi-pentagon-fill"></i>{EmployeeTimings[1].timingStatus}</p>
            <p className="Employee-Duties-ChlidDiv-DemoText">{EmployeeTimings[1].timing}</p>
            <p id="Employee-Duties-ChlidDiv2-Count">{EmployeeTimings[1].count}</p>
            </div>
            <div className="Employee-Duties-ChlidDiv3">
            <p className="Employee-Duties-ChlidDiv-Header" ><i id="Div3-triangle" class="bi bi-triangle-fill"></i>{EmployeeTimings[2].timingStatus}</p>
            <p id="Employee-Duties-ChlidDiv3-Count">{EmployeeTimings[2].count}</p>
            <p id="Employee-Duties-GeneralWard-Text">General Ward</p>
            <p className="Employee-Duties-ChlidDiv3-DemoText1">{EmployeeTimings[2].timing}</p>
            </div>
            <p id="Employee-Duties-PediatricWard-Text">Pediatric Ward</p>
            <p className="Employee-Duties-ChlidDiv3-DemoText-2">{EmployeeTimings[2].timing}</p>
            <div className="Employee-Duties-ChlidDiv4">
                <p id="Employee-Duties-ChildDiv4-DemoText">Zero Hour</p>
            </div>
        </div>
    );
};
export default EmployeeDuties;