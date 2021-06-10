export function nav(location) {
  return location.pathname.startsWith('/');
}

export function app1(location) {
  return location.pathname.startsWith("/app1");
}

export function app2(location) {
  return location.pathname.startsWith("/app2");
}
