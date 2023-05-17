import React from "react";
import Grouplist from "./grouplist";


const groupdata = {
    title : "Data 124",
    modules : [
    {title: 'Module 1',id:1},
    {title: 'Module 2',id:2},
    {title: 'Module 3',id:3},
    {title: 'Module 4',id:4},]
}
const Group = () => {
  return (
    <>
      <Grouplist data={groupdata}></Grouplist>
    </>
  );
};
export default Group;
