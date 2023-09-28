import type { Meta, StoryObj } from '@storybook/react';

import AboutPage from './AboutPage';
import { Theme } from '@/app/providers/theme';

const meta = {
	title: 'pages/AboutPage',
	component: AboutPage,
	tags: ['autodocs'],
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
	parameters: {
		theme: Theme.DARK,
	},
};
