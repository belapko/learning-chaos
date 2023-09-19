type Mods = Record<string, boolean | string>;

export function classNames(cls: string, additional: string[] = [], mods: Mods = {}): string {
	const modsArray = [
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([cls]) => cls),
	];

	const additionalArray = additional.filter(Boolean).join(' ');

	return [cls, additionalArray, modsArray].join(' ').trim();
}
