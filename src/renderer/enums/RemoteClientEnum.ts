const RemoteClientEnum = {
  MobaXterm: 'MobaXterm',
  Xshell: 'Xshell',
} as const;

type RemoteClientEnumType =
  (typeof RemoteClientEnum)[keyof typeof RemoteClientEnum];

export { RemoteClientEnum, RemoteClientEnumType };
