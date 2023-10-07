import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';
import { Theme } from '@/app/providers/theme';

const meta = {
	title: 'shared/Text',
	component: Text,
	tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

const PARAGRAPH =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt leo eros, ac tempor sem tempor eu. Pellentesque sit amet facilisis sem, id sodales erat. Fusce ac libero viverra massa consectetur pellentesque. Sed elementum, eros id ullamcorper convallis, leo lorem sagittis leo, at volutpat tortor sem ut erat. Vestibulum feugiat turpis et tempor accumsan. Donec accumsan massa et ante viverra rhoncus. Pellentesque non elementum ipsum. Fusce posuere bibendum molestie. Fusce semper mattis purus ut facilisis. Donec elementum elit et feugiat convallis. Pellentesque non ipsum volutpat, pretium odio in, dictum diam. Nam id pulvinar mi, id tempus ligula. Sed imperdiet elit non elementum tempus. Aliquam sit amet venenatis lorem. Praesent felis augue, elementum eu gravida a, accumsan ut mi.';

export const TitleLight: Story = {
	args: {
		title: 'Stories Title',
	},
};

export const ParagraphLight: Story = {
	args: {
		paragraph: PARAGRAPH,
	},
};

export const TitleParagraphLight: Story = {
	args: {
		title: 'Stories Title',
		paragraph: PARAGRAPH,
	},
};

export const TitleDark: Story = {
	args: {
		title: 'Stories Title',
	},
	parameters: {
		theme: Theme.DARK,
	},
};

export const ParagraphDark: Story = {
	args: {
		paragraph: PARAGRAPH,
	},
	parameters: {
		theme: Theme.DARK,
	},
};

export const TitleParagraphDark: Story = {
	args: {
		title: 'Stories Title',
		paragraph: PARAGRAPH,
	},
	parameters: {
		theme: Theme.DARK,
	},
};

export const Error: Story = {
	args: {
		paragraph: 'U can use props title, paragraph or both here',
		isError: true,
	},
};
