export const observeScrollEnd = fn => {
  const clientHeight = document.body.clientHeight;
  const windowInnerHeight = window.innerHeight;
  if (window.scrollY + 1 >= clientHeight - windowInnerHeight) fn();
};
