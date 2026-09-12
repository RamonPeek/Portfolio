// Prefix local routes and assets with the configured deployment base.
export const withBase = (path: string) =>
  path.startsWith('/') && !path.startsWith('//')
    ? `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`
    : path;
