import type { Meta, StoryObj } from '@storybook/react';

import { Input, InputTheme } from './Input';
import { Theme } from '@/app/providers/theme';

const meta = {
	title: 'shared/Input',
	component: Input,
	tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Underlined: Story = {
	args: {
		theme: InputTheme.UNDERLINED,
		label: 'Input label',
	},
};

export const UnderlinedAutofocused: Story = {
	args: {
		theme: InputTheme.UNDERLINED,
		label: 'Input label',
		autofocus: true,
	},
};

export const UnderlinedDark: Story = {
	args: {
		label: 'Input label',
		theme: InputTheme.UNDERLINED,
	},
	parameters: {
		theme: Theme.DARK,
	},
};
