import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex bg-slate-300 p-4 justify-between fixed inset-x-0 bottom-0  items-center">
      <div className="flex gap-6">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="footer/javascript.svg"
            alt="Footer Image Description"
            width={40}
            height={40}
          />
          <p className="text-sm">Javascript</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/footer/CSS3.png"
            alt="Footer Image Description"
            width={45}
            height={45}
          />
          <p className="text-sm">CSS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/footer/React.png"
            alt="Footer Image Description"
            width={50}
            height={50}
          />
          <p className="text-sm">ReactJS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/footer/nextjs.png"
            alt="Footer Image Description"
            width={70}
            height={60}
          />
          <p className="text-sm">NextJS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/footer/powerbi.png"
            alt="Footer Image Description"
            width={40}
            height={40}
          />
          <p className="text-sm">PowerBi</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            src="/footer/tailwind.png"
            alt="Footer Image Description"
            width={50}
            height={50}
          />
          <p className="text-sm">tailwindCSS</p>
        </div>
      </div>
      <p className="text-sm mt-10">
        &copy; {new Date().getFullYear()} My Portfolio
      </p>
    </div>
  );
}

export default Footer;
