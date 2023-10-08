import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';
import { Theme } from '@/app/providers/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
	title: 'features/LoginForm',
	component: LoginForm,
	tags: ['autodocs'],
	decorators: [StoreDecorator],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
	parameters: {
		theme: Theme.DARK,
		state: { loginForm: { username: 'wrong', password: 'wrong' } },
	},
};

export const ErrorLight: Story = {
	parameters: {
		state: { loginForm: { username: 'wrong', password: 'wrong', error: 'Error message' } },
	},
};

export const ErrorDark: Story = {
	parameters: {
		theme: Theme.DARK,
		state: { loginForm: { username: 'wrong', password: 'wrong', error: 'Error message' } },
	},
};

export const Loading: Story = {
	parameters: {
		state: { loginForm: { username: 'wrong', password: 'wrong', isLoading: true } },
	},
};
