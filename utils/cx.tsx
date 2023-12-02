export default function cx(...args: Array<string | boolean | undefined | null>) {
  const classes = args
    .flat()
    .filter(currentClass => typeof currentClass === 'string')
    .map(currentClass => (currentClass as string).trim())
    .join(' ')

  return classes
}