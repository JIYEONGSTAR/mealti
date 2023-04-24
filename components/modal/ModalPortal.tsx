import { useMemo, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
// https://ko.reactjs.org/docs/portals.html
interface IModalPortalProps {
  children: ReactNode;
}

export const ModalPortalWrap = ({ children }: IModalPortalProps) => {
  const subDiv = useMemo(() => document.createElement("div"), []);
  useEffect(() => {
    subDiv.id = "modal-portal-wrapper";
    document.body.appendChild(subDiv);
    return () => subDiv.remove();
  }, [subDiv]);
  return createPortal(<>{children}</>, subDiv);
};
