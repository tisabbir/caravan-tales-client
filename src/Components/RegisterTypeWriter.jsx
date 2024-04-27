
import { Typewriter } from 'react-simple-typewriter'

const RegisterTypeWriter = () => {

  

  return (
    <div className='App'>
      <h1 style={{ margin: 'auto 0', fontWeight: 'normal', 'font-size': '2rem' }}>
        Join The Elite Travelers : {' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Register', 'Travel With Caravan',]}
            loop={50}
            cursor
            cursorStyle='_'
            typeSpeed={85}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  )
}

export default RegisterTypeWriter;