import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";

const showModalFunc = () => {
  const trigger = (el, etype, custom) => {
    const evt = custom ?? new Event(etype, { bubbles: true });
    el.dispatchEvent(evt);
  };
  setTimeout(
    (_) => trigger(document.querySelector(`#show-modal-icon`), `click`),
    100
  );
};

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();
  if (!auth.user) {
    setTimeout(() => {
      showModalFunc();
    }, 350);
    return <Navigate to="/" state={{ path: location.pathname }} />;
  }
  return children;
};
