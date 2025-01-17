import React from "react";

const HostPerson = ({host}) => (
    <div className="host">
        <div className="host-name">{host.name}</div>
        <div className="host-picture">
            <img src={host.picture} alt={host.name}/>
        </div>
    </div>
);

export default HostPerson;

