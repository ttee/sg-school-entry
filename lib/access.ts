/** Paid homework vs trial. Admin can open and submit every week. */

export function isAdminRole(role?: string | null): boolean {
  return role === "admin";
}

export function canAccessWeek(opts: {
  role?: string | null;
  subscribed?: boolean | null;
  isSample?: boolean | null;
}): boolean {
  return (
    isAdminRole(opts.role) ||
    Boolean(opts.subscribed) ||
    Boolean(opts.isSample)
  );
}
