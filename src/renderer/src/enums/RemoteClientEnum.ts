const RemoteClientEnum = {
  MOBAXTERM: 'MobaXterm',
  XSHELL: 'Xshell'
} as const

type RemoteClientEnumType = (typeof RemoteClientEnum)[keyof typeof RemoteClientEnum]

export type { RemoteClientEnumType }
export { RemoteClientEnum }
