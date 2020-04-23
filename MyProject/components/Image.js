import React from 'react';
import PropTypes from 'prop-types';
import {events} from './events';
import './Image.css'

class Image extends React.PureComponent {
    static propTypes={
        src:PropTypes.string
    }

    closeImg=()=>{
        events.emit('CloseImg',false)
    }

    render(){
      
        return( 
            <div className='Img'>
                <input className={'CloseImg'} onClick={this.closeImg} type={'text'} defaultValue={'Close'}></input>
                <img src={this.props.src}/>
            </div>
        )
    }
}


export default Image