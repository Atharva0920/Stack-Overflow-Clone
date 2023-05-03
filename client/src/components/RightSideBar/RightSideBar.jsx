import React from 'react'
import Widget from './Widgets/Widget'
import WidgetTags from './Widgets/WidgetTags'

const RightSideBar = () => {
    return (
        <aside className='right-sidebar'>
            <Widget />
            <WidgetTags />
        </aside>
    )
}

export default RightSideBar