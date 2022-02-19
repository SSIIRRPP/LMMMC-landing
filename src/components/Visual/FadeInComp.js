import { useRef, useEffect, useState } from "react";
import useVisibility from "../../hooks/useVisibility";
import "./styles/FadeInComp.scss";

const FadeInComp = ({
  children,
  className,
  childRef,
  style = {},
  options,
  active,
}) => {
  const _childRef = useRef(null);
  const [_visible, _setVisible] = useState(false);
  const [_active, _setActive] = useState(true);
  const { isVisible: _isVisible } = useVisibility({
    childRef: childRef ? childRef : _childRef,
    options: options ? options : undefined,
    active: typeof active === "boolean" ? active : _active,
  });
  useEffect(() => {
    if (_isVisible) {
      _setVisible(true);
      _setActive(false);
    }
  }, [_isVisible]);
  return (
    <div
      ref={childRef ? childRef : _childRef}
      className={`FadeInComp${className ? ` ${className}` : ""}`}
      style={{ ...style, opacity: _visible ? "1" : "0" }}
    >
      {children}
    </div>
  );
};

export default FadeInComp;
