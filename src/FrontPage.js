import React from 'react'
import {Link} from 'react-router-dom'
import Title from './Title'
import RaisedButton from 'material-ui/RaisedButton'
import pubgTitle from './pubgTitle.jpg'

const style = {
  margin: 12,
  width: '200px',
  height: '100px',
  fontSize: '20%',
}

function FrontPage () {
  return (
    <div className = 'body'>
      <Title position='center' image={pubgTitle} color='white'/>
      <div className='thumbnailDiv'>
        <div className='thumbnailHolder'>
          <div className='thumbnail'>
            <Link to='/Generator'>
              <RaisedButton
                label='Go!'
                className='startButton'
                primary={true} style={style} 
                labelStyle={{lineHeight: '100px', fontSize: '45px'}}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrontPage
