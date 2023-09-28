import type { Meta, StoryObj } from '@storybook/react';

import { NavLink } from './NavLink';
import { Theme } from '@/app/providers/theme';

const meta = {
	title: 'shared/NavLink',
	component: NavLink,
	tags: ['autodocs'],
	args: {
		to: '',
	},
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'NavLink',
	},
};

export const PrimaryDark: Story = {
	args: {
		children: 'NavLink',
	},
	parameters: {
		theme: Theme.DARK,
	},
};
