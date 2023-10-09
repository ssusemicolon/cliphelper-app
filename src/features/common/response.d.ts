interface ResponseType<T> {
  status: number;
  code: string;
  data: T;
}
