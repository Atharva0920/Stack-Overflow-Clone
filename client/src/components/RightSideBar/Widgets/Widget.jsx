import React from 'react'
import '../RightSideBar.css'
import Comment from '../../../assets/message-solid.svg'
import Pen from '../../../assets/pen.svg'
import GreyLogo from '../../../assets/stackoverflow-grey.svg'

const Widget = () => {
    return (
        <div className='widget'>
            <h4>The Overflow Blog</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={Pen} alt='pen' width='15' />
                    <p>Are meetings making you less productive?</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={Pen} alt='pen' width='15' />
                    <p>The philosopher who believes in Web Assembly</p>
                </div>
            </div>


            <h4>Featured on Meta</h4>
            <div className='right-sidebar-div-1'>

                <div className='right-sidebar-div-2'>
                    <img src={Comment} alt='pen' width='15' />
                    <p>  Improving the copy in the close modal and post notices - 2023 edition</p>
                </div>

                <div className='right-sidebar-div-2'>
                    <img src={GreyLogo} alt='pen' width='15' />
                    <p>Temporary policy: ChatGPT is banned</p>
                </div>

                <div className='right-sidebar-div-2'>
                    <img src={GreyLogo} alt='pen' width='15' />
                    <p>The [protection] tag is being burninated</p>
                </div>

                <div className='right-sidebar-div-2'>
                    <img src={GreyLogo} alt='pen' width='15' />
                    <p> Content Discovery initiative 4/13 update: Related questions using a Machine...</p>
                </div>

            </div>



        </div>

    )
}

export default Widget