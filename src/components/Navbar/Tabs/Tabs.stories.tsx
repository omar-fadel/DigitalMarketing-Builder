import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Tabs, TabsProps } from './Tabs';

export default {
    title: 'Navbar/Tabs/Pure Tabs',
    component: Tabs,
    argTypes: {
        selectedTab: {
            defaultValue: 'homepage',
            description: 'sadaskldjsa',
            control: {
                type: 'select',
                options: ['homepage', 'products', 'services']
            }
        },
        tabs: {
            defaultValue: ['sdsa'],
            description: 'the tabs ya m3alem'
        },
        selectTabWithIndex: {
            action: 'clicked',
            table: {
                disable: true
            }
        },
        message: {
            action: 'message',
        }
    },
} as Meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    selectedTab: 'homepage',
    tabs: ['homepage', 'products', 'services'],    
};

