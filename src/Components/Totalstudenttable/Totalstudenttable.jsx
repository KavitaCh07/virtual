import "./Totalstudenttable.css";

import React from "react";

export default function Totalstudenttable() {
  return (
    <div className="Totalstudenttable">
      <div className="Totalstudenttable-header">
        <div className="Totalstudenttable-header-details-div">
          <span className="Totalstudenttable-headertext">Total Student</span>
          <span className="Totalstudenttable-totalcount">1500 people</span>
        </div>
        <span className="Totalstudenttable-viewall">View all</span>
      </div>
    </div>
  );
}
