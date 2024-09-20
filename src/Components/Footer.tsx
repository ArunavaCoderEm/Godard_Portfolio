import React from "react";
import { Link } from "react-router-dom";
import Privacy from "../Icons/Privacy";

const MinimalSocialsFooter = (): React.ReactNode => {
  return (
    <div className="flex w-full flex-col items-center justify-center sm:flex-row gap-2 border-t border-gray-900/5 bg-[#121316] dark:border-white/5">
      <h1 className="text-white p-3">
        © 2024 Arunava Dutta. All rights reserved.
      </h1>
      <div className="flex items-center">
        <h1 className="text-[#6EACDA] p-3">
          Developed with 💙 by{" "}
          <span className="text-[#6EACDA] font-
          bold">Arunava Dutta</span>
        </h1>
        <span className="text-gray-400 mr-2">|</span>
        <Link to="/privacy" className="text-[#6EACDA] flex items-center gap-x-1 hover:underline">
          <Privacy />
          Privacy
        </Link>
      </div>
    </div>
  );
};

export default MinimalSocialsFooter;
