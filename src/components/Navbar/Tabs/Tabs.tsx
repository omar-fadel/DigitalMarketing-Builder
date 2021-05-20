import React, { ChangeEvent } from 'react';
import { Tab, Tabs as MaterialTabs } from '@material-ui/core';
import { RootState } from '../../../redux/store';
import { connect, ConnectedProps } from 'react-redux';
import { selectSelectedTab, selectTabs, selectTabWithIndex } from '../../../redux/slice/navigation/navigation';


const mapStateToProps = (state: RootState) => ({
    tabs: selectTabs(state),
    selectedTab: selectSelectedTab(state)
})
const mapDispatchToProps = { selectTabWithIndex };
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>


export interface TabsProps extends PropsFromRedux {
    message: (message: string) => void
}

export const Tabs: React.FC<TabsProps> = (props) => {
    const { tabs, selectTabWithIndex,selectedTab, message } = props;
    const handleChange: (event: ChangeEvent<{}>, newValue: number) => void = (event, newValue) => {
        selectTabWithIndex(newValue);
        if (message) {
            message(`selected tab number ${newValue}`);
        }
    }

    return (
        <MaterialTabs
            value={selectedTab ? tabs.indexOf(selectedTab) : false}
            indicatorColor="primary"
            centered
            textColor="primary"
            onChange={handleChange}
        >
            {tabs.map((tab) => (
                <Tab
                    label={tab}
                    id={`${tab}-tab`}
                    key={`${tab}-key`}
                />
            ))}
        </MaterialTabs>
    )
}

export default connector(Tabs);