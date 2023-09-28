import type { Meta, StoryObj } from '@storybook/react';

import { ErrorPage } from './ErrorPage';
import { Theme } from '@/app/providers/theme';

const meta = {
	title: 'pages/ErrorPage',
	component: ErrorPage,
	tags: ['autodocs'],
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
	parameters: {
		theme: Theme.DARK,
	},
};
