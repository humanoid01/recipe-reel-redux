interface Error {
  error: string;
  property: string;
}
interface QueryError {
  data: Error[];
}

export function isFetchBaseQueryError(err: unknown): err is QueryError {
  return typeof err === 'object' && err !== null && 'data' in err;
}
