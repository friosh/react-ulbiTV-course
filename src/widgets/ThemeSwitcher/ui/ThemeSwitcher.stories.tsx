import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
  decorators: [
    (Story) => <ThemeProvider><Story /></ThemeProvider>,
  ],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {
  args: {},
};
