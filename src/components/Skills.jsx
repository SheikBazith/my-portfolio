import React from "react";

function Skills(props){
  return (
    <div className="spec-container flex flex-col w-[300px] gap-2 p-4 bg-white dark:bg-[#171717] rounded-md">
      <h3 className="text-md text-[#292929] dark:text-white">{props.name}</h3>
      <p className="text-xs text-[#797979]">{props.desc}</p>
      <div className="block ml-auto mt-4 bg-[#fdb854] dark:bg-[#29cb8c] p-3 w-[50px] rounded-md cursor-pointer hover:bg-[#fcb141]"><img className="w-[30px]" src={props.img}/></div>
    </div>
  )
}

export default Skills;




