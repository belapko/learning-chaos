import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonTheme } from './Button';
import { Theme } from '@/app/providers/theme';

const meta = {
	title: 'shared/Button',
	component: Button,
	tags: ['autodocs'],
	// argTypes: {
	// 	backgroundColor: { control: 'color' },
	// },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
	args: {
		children: 'Button',
		theme: ButtonTheme.CLEAR,
	},
};

export const Outline: Story = {
	args: {
		children: 'Button',
		theme: ButtonTheme.OUTLINE,
	},
};

export const OutlineDark: Story = {
	args: {
		children: 'Button',
		theme: ButtonTheme.OUTLINE,
	},
	parameters: {
		theme: Theme.DARK,
	},
};
