type ModsType = Record<string, string | boolean>;

export const classNames = (
  className: string,
  mods: ModsType = {},
  additionally: string[] = []
) => {
  return [
    className,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className, _]) => className),
    ...additionally,
  ]
    .join(' ')
    .trim();
};
