export const checkInternetExplores = () => {
  const isIE = navigator.userAgent.indexOf("Trident") > -1;
  let isOldVersionIE = navigator.userAgent.indexOf("MSIE") > -1;
  return isIE || isOldVersionIE;
};
