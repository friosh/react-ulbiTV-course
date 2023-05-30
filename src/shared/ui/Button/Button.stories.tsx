import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text'
  },
};

export const Clear: Story = {
  args: {
    children: 'Clear',
    theme: ThemeButton.CLEAR
  },
};

export const Outline: Story = {
    args: {
      children: 'Outline',
      theme: ThemeButton.OUTLINE
    },
  };
