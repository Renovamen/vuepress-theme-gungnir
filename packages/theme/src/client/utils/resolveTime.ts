export function renderTime(date: string): string {
  const dateee = new Date(date).toJSON();
  return new Date(+new Date(dateee) + 8 * 3600 * 1000)
    .toISOString()
    .replace(/T/g, " ")
    .replace(/\.[\d]{3}Z/, "")
    .replace(/-/g, "/");
}

export function dateFormat(date: string, type: string): string {
  date = renderTime(date);
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const mon = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  if (type === "year") return year.toString();
  else return `${mon}-${day}`;
}

export function formatDate(time: string, fmt = "yyyy-MM-dd hh:mm:ss"): string {
  time = time.replace(/-/g, "/");
  const date = new Date(time);
  if (/(y+)/.test(fmt)) {
    fmt = fmt
      .replace(RegExp.$1, date.getFullYear() + "")
      .substring(4 - RegExp.$1.length);
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

export function formatDateForArticle(value?: string): string {
  if (!value) return "";
  value = value.replace("T", " ").slice(0, value.lastIndexOf("."));

  const h = Number(value.substring(11, 13)); // hours
  const m = Number(value.substring(14, 16)); // minutes
  const s = Number(value.substring(17, 19)); // seconds

  if (h > 0 || m > 0 || s > 0) {
    // if user set hours, minutes or seconds manully
    return formatDate(value);
  } else {
    return formatDate(value, "yyyy-MM-dd");
  }
}
