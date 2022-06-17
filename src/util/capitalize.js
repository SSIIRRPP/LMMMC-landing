export default function capitalize(
  str,
  all = false,
  ignoreWords = [],
  splitter = " "
) {
  const capWrd = (st) => {
    let s = st[0].toUpperCase();
    return `${s}${st.slice(1, st.length)}`;
  };
  if (all) {
    return str
      .split(splitter)
      .map((it, i) => (!ignoreWords?.includes(i) ? capWrd(it) : it))
      .join(splitter);
  } else {
    return capWrd(str);
  }
}
