import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { action } from '@storybook/addon-actions';

import ConnectedTabs, { TabsProps } from './Tabs';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';

export default {
    title: 'Navbar/Tabs/Connected',
    component: ConnectedTabs,
    argTypes: {
        message: {
            action: 'message'
        }
    },
} as Meta;

const ConnectedTemplate: Story<TabsProps> = (args) => <Provider store={store}><ConnectedTabs {...args} /></Provider>;


export const PrimaryCon = ConnectedTemplate.bind({});
PrimaryCon.parameters = {
    controls: {
        hideNoControlsWarning: true
    }
}
