import Expand from "react-expand-animated";

const HeaderDropdown = ({
  title,
  id,
  style,
  pStyle = {},
  className,
  children,
  open,
  setOpen,
}) => {
  return (
    <>
      <div
        style={style ? { ...style } : {}}
        className={className ? className : undefined}
        onClick={() => setOpen((s) => (s === id ? null : id))}
      >
        <p className="underline-on-hover" style={{ margin: 0, ...pStyle }}>
          {title}
        </p>
      </div>
      <Expand open={open === id}>{children}</Expand>
    </>
  );
};

export default HeaderDropdown;
