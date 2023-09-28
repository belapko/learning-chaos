import type { Meta, StoryObj } from '@storybook/react';

import MainPage from './MainPage';
import { Theme } from '@/app/providers/theme';

const meta = {
	title: 'pages/MainPage',
	component: MainPage,
	tags: ['autodocs'],
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
	parameters: {
		theme: Theme.DARK,
	},
};
