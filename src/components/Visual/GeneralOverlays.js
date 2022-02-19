import React, { useRef } from "react";
import { OverlayTrigger, Overlay, Tooltip, Popover } from "react-bootstrap";

export const GeneralOverlayTooltip = ({
  message,
  children,
  placement,
  delay,
  tooltipClassName = "",
  show,
  trigger,
}) => {
  return (
    <OverlayTrigger
      delay={delay ? delay : "400"}
      trigger={trigger ? trigger : "click"}
      show={typeof show === "boolean" ? show : undefined}
      placement={placement ? placement : "right-start"}
      overlay={<Tooltip className={tooltipClassName}>{message}</Tooltip>}
    >
      {children}
    </OverlayTrigger>
  );
};

export const OverlayTooltipTarget = ({
  message,
  children,
  placement,
  delay,
  tooltipClassName = "",
  show,
  target,
}) => {
  const targetRef = useRef(null);
  return (
    <>
      <span ref={targetRef}>{children}</span>
      <Overlay
        delay={delay ? delay : "400"}
        target={targetRef.current}
        show={typeof show === "boolean" ? show : undefined}
        placement={placement ? placement : "right-start"}
      >
        <Tooltip className={tooltipClassName}>{message}</Tooltip>
      </Overlay>
    </>
  );
};

export const GeneralOverlayPopover = ({
  children,
  placement,
  delay,
  overlay,
  onToggle,
  trigger = ["click"],
  show,
  disabled = false,
}) => {
  return disabled ? (
    children
  ) : (
    <OverlayTrigger
      delay={delay ? delay : "400"}
      trigger={trigger}
      onToggle={onToggle ? onToggle : null}
      placement={placement ? placement : "right-start"}
      show={typeof show === "boolean" ? show : undefined}
      overlay={<Popover>{overlay}</Popover>}
    >
      {children}
    </OverlayTrigger>
  );
};

export const OverlayPopover = ({
  children,
  placement,
  delay,
  overlay,
  onToggle,
  show,
  disabled = false,
}) => {
  return disabled ? (
    children
  ) : (
    <Overlay
      delay={delay ? delay : "400"}
      trigger="click"
      onToggle={onToggle ? onToggle : null}
      placement={placement ? placement : "right-start"}
      show={typeof show === "boolean" ? show : undefined}
      overlay={<Popover style={{ color: "red" }}>{overlay}</Popover>}
    >
      {children}
    </Overlay>
  );
};
