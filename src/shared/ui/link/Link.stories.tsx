import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';
import { Theme } from '@/app/providers/theme';

const meta = {
	title: 'shared/Link',
	component: Link,
	tags: ['autodocs'],
	args: {
		to: '',
	},
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Link',
	},
};

export const PrimaryDark: Story = {
	args: {
		children: 'Link',
	},
	parameters: {
		theme: Theme.DARK,
	},
};
