export type InferValueType<T> = T extends { [key: string]: infer U }
  ? U
  : never;
