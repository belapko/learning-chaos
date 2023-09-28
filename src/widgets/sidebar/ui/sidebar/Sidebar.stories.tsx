import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { Theme } from '@/app/providers/theme';

const meta = {
	title: 'widgets/Sidebar',
	component: Sidebar,
	tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
	parameters: {
		theme: Theme.DARK,
	},
};
