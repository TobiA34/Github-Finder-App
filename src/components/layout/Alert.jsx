 import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
  import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
  

function Alert() {
    //This will give you whatever is put in the alert
    const {alert} = useContext(AlertContext)
 
  return (
    //if alert is not equal to null then
    <div>
      {alert !== null && (
        <p className="flex items-start mb-4 space-x-2">
          {alert.type === "error" && (
            <FontAwesomeIcon icon={faTriangleExclamation} />
          )}
          <span className="flex-1 tex-base font-semibold leading-7 text-white">
            <strong>{alert.msg}</strong>
          </span>
        </p>
      )}
    </div>
  );
}

export default Alert
