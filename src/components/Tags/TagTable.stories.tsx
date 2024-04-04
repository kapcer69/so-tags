import { Meta } from '@storybook/react';
import TagTable from './TagTable';

export default {
    title: 'Components/TagTable',
    component: TagTable,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} as Meta<typeof TagTable>;

export const Default = () => <TagTable />;
