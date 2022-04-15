import { useRef, useEffect, useState } from "react";
import useVisibility from "../../hooks/useVisibility";
import "./styles/FadeInComp.scss";

const FadeInComp = ({
  children,
  className,
  childRef,
  style = {},
  options = { ratio: 0.2, threshold: [0.2, 0.4, 0.6, 0.8] },
  onShow,
  active,
  id,
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
      typeof onShow === "function" && onShow();
    }
  }, [_isVisible, onShow]);
  return (
    <div
      ref={childRef ? childRef : _childRef}
      className={`FadeInComp ${_visible ? "show" : "hide"}${
        className ? ` ${className}` : ""
      }`}
      style={style}
      id={id ? id : undefined}
    >
      {children}
    </div>
  );
};

export default FadeInComp;
