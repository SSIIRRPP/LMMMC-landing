import Expand from "react-expand-animated";

const HeaderDropdown = ({
  title,
  id,
  style,
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
        {title}
      </div>
      <Expand open={open === id}>{children}</Expand>
    </>
  );
};

export default HeaderDropdown;
