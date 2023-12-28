import React from "react";
import { Link } from "react-router-dom";

const ProfileCertificates = ({ certificates }) => {
  return (
    <>
      {certificates.map((x) => (
        <Link
          key={certificates.indexOf(x)}
          to={`/certificate/${x.certificate_id}`}
        >
          <div className="rounded-md shadow-sm hover:scale-105 transition duration-300">
            <img
              src={`https://static.cpc.daffodilvarsity.edu.bd/${x.certificate_image}`}
              alt={`Certificate for ${x.program_name}`}
              className="rounded-md"
            />
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProfileCertificates;
