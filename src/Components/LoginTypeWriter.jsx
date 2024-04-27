
import { Typewriter } from 'react-simple-typewriter'

const LoginTypeWriter = () => {

  

  return (
    <div className='App'>
      <h1 style={{ margin: 'auto 0', fontWeight: 'normal', 'font-size': '2rem' }}>
        Dive in the Caravan : {' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Sign in', 'Travel With Caravan',]}
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

export default LoginTypeWriter;