import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './Spinner';
import { Theme } from '@/app/providers/theme';

const meta = {
	title: 'shared/Spinner',
	component: Spinner,
	tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
	parameters: {
		theme: Theme.DARK,
	},
};
