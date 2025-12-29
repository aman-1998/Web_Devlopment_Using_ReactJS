import React from "react";

export default function Alert(props) {
  // type prop can be 'success', 'danger', 'warning', 'info', etc.

  const getAlert = (type) => {
    switch (type) {
      case "success":
        return (
          // success (tick)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="bi flex-shrink-0 me-2"
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="currentColor"
            role="img"
            aria-label="Success:"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 10.97l5-5-.708-.708L6.97 9.556 4.738 7.324l-.708.708 2.94 2.94z" />
          </svg>
        );
      case "warning":
        return (
          // Warning (!)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="bi flex-shrink-0 me-2"
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="currentColor"
            role="img"
            aria-label="Warning:"
          >
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        );
      case "info":
        // info (i)
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="bi flex-shrink-0 me-2"
            aria-label="Info:"
          >
            <path
              fillRule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 .935-.252 1.02-.598l.088-.416c.064-.293.12-.352.432-.352h.401l.082-.38-2.29-.287.082-.38.45-.083c.294-.07.352-.176.288-.469l.738-3.468c.194-.897-.105-1.319-.808-1.319-.545 0-.935.252-1.02.598l-.088.416c-.064.293-.12.352-.432.352H6.6l-.082.38zM8 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            />
          </svg>
        );
      case "danger":
        //  Danger (x)
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 16 16"
            className="bi flex-shrink-0 me-2"
            fill="currentColor"
            aria-label="Danger:"
          >
            <path
              fillRule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        );
      case "dark":
        // Notification (bell)
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="bi flex-shrink-0 me-2"
            width="18"
            height="18"
            viewBox="0 0 16 16"
            role="img"
            fill="currentColor"
            aria-label="Notification:"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
            <path d="M8 1a5 5 0 0 0-5 5v2.086l-.707.707A1 1 0 0 0 3 11h10a1 1 0 0 0 .707-1.707L13 8.086V6a5 5 0 0 0-5-5z" />
          </svg>
        );
      default:
        return null;
    }
  };

  if (props.alert === null) {
    return null;
  }

  return (
    <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show d-flex align-items-center`}
      role="alert"
      style={{ height: "40px", paddingRight: "0rem" }}
    >
      {getAlert(props.alert.type)}

      <div className="flex-grow-1">{props.alert.message}</div>

      <button
        type="button"
        className="btn-close position-static align-self-center btn-close-size"
        aria-label="Close"
        onClick={props.clearAlert}
      />
      
    </div>
  );
}
