import React from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  label?: string;
}

export default function ServiceCard({ image, title, description, label }: ServiceCardProps) {
  return (
    <div className="relative">
      {/* Empty div behind whole card */}
      <div
        className="max-w-sm absolute inset-0 bg-gray-100 z-0 
                   rotate-[-5deg] rounded-3xl border border-gray-300"
      ></div>

      {/* Card */}
      <div className="max-w-sm rounded-3xl border border-gray-300 bg-white 
                      flex flex-col relative z-10 overflow-hidden h-96">

        {/* Image wrapper */}
        <div className="relative w-full h-[60%]">
          {/* {label && (
            <div className="absolute top-0 left-0 bg-lime-400 text-black 
                    text-sm font-semibold py-1.5 px-3 rounded-br-md z-10">
              {label}
            </div>
          )} */}

<div className="w-full h-full bg-[#E6FBE6]">
            <img src={image} alt={title} className="w-full h-full object-fill" />
</div>        </div>



        {/* Content section */}
        <div className="pb-6 px-6 space-y-2 h-[40%] flex flex-col justify-center">
          <h2 className="text-xl font-semibold text-black text-left">
            {title}
          </h2>

          <p className="text-gray-500 text-sm text-left">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}