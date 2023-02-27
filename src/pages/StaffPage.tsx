import React from "react";
import Breadcrums from "../components/Breadcrumbs";
import { StaffList } from "../utils/constants";
import noimage from "../assets/images/noimage.png";

const StaffPage = () => {
  return (
    <>
      <Breadcrums title="Сотрудники" />
      <div className="container">
        <div className="row">
          {StaffList.map((staff) => (
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
              key={staff.id}
            >
              <div className="team_col">
                <div className="team_img">
                  <img
                    src={staff.image ? `images/${staff.image}` : noimage}
                    alt={staff.title}
                  />
                </div>
                <div className="team_name">{staff.title}</div>
                <div className="team_position">{staff.position}</div>
                {staff.phone && (
                  <div className="team_phone">
                    <span>Телефон:</span> {staff.phone}
                  </div>
                )}
                {staff.mail && (
                  <div className="team_email">
                    <span>E-mail:</span>{" "}
                    <a href={`mailto:${staff.mail}`}>{staff.mail}</a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaffPage;
