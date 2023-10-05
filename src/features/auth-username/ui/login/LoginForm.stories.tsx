import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from './LoginForm';
import { Theme } from '@/app/providers/theme';

const meta = {
	title: 'features/LoginForm',
	component: LoginForm,
	tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
	parameters: {
		theme: Theme.DARK,
	},
};
