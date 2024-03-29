"use client";
import React from "react";
import Link from "next/link";
const ProjectItem = () => {
  return (
    <>
      <div className="group">
        <a href="#" className="w-full h-full py-3 ">
          <div className=" mix-blend-multiply">
            <img
              src="https://images.unsplash.com/photo-1682686580452-37f1892ee5e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
              alt=""
              className="rounded-lg group-hover:scale-105 transition-all opacity-15 group-hover:opacity-100  ease-in-out duration-500"
            />
          </div>
          <p className="text-2xl my-3 font-semibold text-[#000001bf] group-hover:bg-[#243c2f] group-hover:text-[#efeba7]">
            Burned Village & Forests in VN s Coup
          </p>
        </a>
        <p className="text-lg text-[#a7a7a7] font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          error voluptas totam doloremque, explicabo inventore assumenda
          deserunt excepturi et rerum repellendus. Dolores suscipit porro
          doloremque
        </p>
      </div>
    </>
  );
};

export default ProjectItem;
