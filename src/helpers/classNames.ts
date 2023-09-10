type Mods = Record<string, boolean | string>;

export function classNames(cls: string, additional: string[] | string, mods?: Mods): string {
    const modsArray = mods
        ? [
              ...Object.entries(mods)
                  .filter(([_, value]) => Boolean(value))
                  .map(([cls]) => cls),
          ]
        : null;

    const additionalArray = Array.isArray(additional) ? [...additional] : additional;

    return [cls, additionalArray, modsArray].join(' ').trim();
}
