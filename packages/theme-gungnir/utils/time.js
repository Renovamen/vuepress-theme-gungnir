export function renderTime(date) {
  var dateee = new Date(date).toJSON();
  return new Date(+new Date(dateee) + 8 * 3600 * 1000)
    .toISOString()
    .replace(/T/g, " ")
    .replace(/\.[\d]{3}Z/, "")
    .replace(/-/g, "/");
}

export function dateFormat(date, type) {
  date = renderTime(date);
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const mon = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  if (type == "year") return year;
  else return `${mon}-${day}`;
}

export function formatDate(time, fmt = "yyyy-MM-dd hh:mm:ss") {
  time = time.replace(/-/g, "/");
  const date = new Date(time);
  if (/(y+)/.test(fmt)) {
    fmt = fmt
      .replace(RegExp.$1, date.getFullYear() + "")
      .substr(4 - RegExp.$1.length);
  }

  const o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };

  for (const key in o) {
    if (RegExp(`(${key})`).test(fmt)) {
      const str = o[key] + "";
      fmt = fmt.replace(RegExp.$1, str.length === 2 ? str : "0" + str);
    }
  }
  return fmt;
}

export function compareDate(a, b) {
  return getTimeNum(b) - getTimeNum(a);
}

export function throttle(func, delay) {
  let timer = null;
  let startTime = Date.now();

  return function () {
    const curTime = Date.now();
    const remaining = delay - (curTime - startTime);
    const context = this;
    const args = arguments;

    clearTimeout(timer);
    if (remaining <= 0) {
      func.apply(context, args);
      startTime = Date.now();
    } else {
      timer = setTimeout(func, remaining);
    }
  };
}

function getTimeNum(date) {
  return new Date(date.frontmatter.date).getTime();
}
