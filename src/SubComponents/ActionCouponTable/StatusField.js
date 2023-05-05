import moment from "moment";
import React, { useEffect, useState } from "react";
import { LabelStatus } from "./Style";

const StatusField = ({ params }) => {
  const [statusDate, setStatusDate] = useState("");
  useEffect(() => {
    const compareDate = () => {
      let dateNow = new Date(Date.now()).getTime();
      let expire = new Date(params.row.expire).getTime();
      if (expire > dateNow) {
        setStatusDate("valid");
      } else {
        setStatusDate("invalid");
      }
    };
    compareDate();
  }, [params.row.expire]);
  return (
    <div>
      {statusDate === "valid" ? (
        <LabelStatus stat="valid">{moment(params.row.expire).format("ddd MMM DD YYYY")} (Valid)</LabelStatus>
      ) : (
        <LabelStatus stat="invalid">{moment(params.row.expire).format("ddd MMM DD YYYY")} (Invalid)</LabelStatus>
      )}
    </div>
  );
};

export default StatusField;
