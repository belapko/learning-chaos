import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { Theme } from '@/app/providers/theme';

const meta = {
	title: 'shared/Modal',
	component: Modal,
	tags: ['autodocs'],
	args: {
		children: (
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illum, illo et dignissimos
				doloremque labore. Suscipit expedita dolorum, quo, animi repellat praesentium non necessitatibus iusto
				aperiam at inventore. Illo, similique! Laudantium corrupti commodi unde natus nisi suscipit vel, eum
				eos. Quos, incidunt. Perspiciatis ipsam quibusdam commodi, cum nam dicta. Nemo consectetur aut et
				deserunt dolorem exercitationem explicabo natus quo provident voluptatum a, velit ipsum tempore
				consequuntur esse dicta molestiae temporibus eaque quod vitae hic beatae. Laborum, provident nemo
				blanditiis quasi architecto minima commodi corporis est inventore neque quisquam accusantium quod nisi.
				Repellat, error? Veniam in, quos tenetur molestias laboriosam cum?
			</p>
		),
		className: Theme.LIGHT,
	},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
	args: {
		isOpen: false,
	},
};

export const OpenedWithoutTitle: Story = {
	args: {
		isOpen: true,
	},
};

export const OpenedWithTitle: Story = {
	args: {
		title: 'Lorem ipsum dolor sit amet.',
		isOpen: true,
	},
};

export const DarkOpenedWithoutTitle: Story = {
	args: {
		isOpen: true,
		className: Theme.DARK,
	},
};

export const DarkOpenedWithTitle: Story = {
	args: {
		title: 'Lorem ipsum dolor sit amet.',
		isOpen: true,
		className: Theme.DARK,
	},
};
