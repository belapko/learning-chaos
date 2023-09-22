import { classNames } from './classNames';

describe('classNames', () => {
	test('only one main class', () => {
		expect(classNames('defaultClass')).toBe('defaultClass');
	});
	test('main class and additionals', () => {
		const expected = 'defaultClass additional1 additional2';
		expect(classNames('defaultClass', ['additional1', 'additional2'])).toBe(expected);
	});
	test('main class with additionals and mods', () => {
		const expected = 'defaultClass additional1 mod1';
		expect(classNames('defaultClass', ['additional1'], { mod1: true, mod2: false })).toBe(expected);
	});
});
