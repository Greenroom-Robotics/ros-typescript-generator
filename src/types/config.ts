export type IConfigDirectory = {
  readonly namespace: string;
  readonly path: string;
};

export type IConfig = {
  readonly output: string;
  readonly input: readonly IConfigDirectory[];
  readonly typePrefix: string;
  readonly parseRos2: boolean;
};
