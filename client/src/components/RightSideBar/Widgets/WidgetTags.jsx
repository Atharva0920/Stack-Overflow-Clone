import React from 'react'

const WidgetTags = () => {
    const tags = ['c++', 'html', 'css', 'java', 'javascript', 'node', 'express', 'mongodb', 'python', 'ruby', 'flutter', 'c', 'react',];
    return (
        <div className='widget-tags'>
            <h4> Watched Tags</h4>
            <div className='widget-tags-div'>
                {
                    tags.map((tag) => (
                        <p key={tag}>{tag}</p>
                    ))
                }
            </div>

        </div>
    )
}

export default WidgetTags