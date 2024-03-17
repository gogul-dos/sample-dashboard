import {LoginSocialGoogle} from 'reactjs-social-login'
import Cookies from 'js-cookie'
import {FcGoogle} from 'react-icons/fc'
import './index.css'

const Login = props => {
  const formSubmitted = event => {
    event.preventDefault()
  }
  const loginResolved = (provider, data) => {
    console.log(provider, data)
  }
  const loginRejected = () => {
    console.log('rejected')
    Cookies.set('jwt_token', 'Logged-in', {expires: 15})
    const {history} = props
    history.replace('/')
  }
  return (
    <div className="main-login-container">
      <div className="login-left-container">
        <h1>Board...</h1>
      </div>
      <div className="login-right-container">
        <div>
          <h1 style={{textAlign: 'center'}}>Sign In</h1>
          <LoginSocialGoogle
            client_id="657958535898-1loq2q4rcn0m0h3u78jqn40gpsh5cq4f.apps.googleusercontent.com"
            access_type="offline"
            onResolve={({provider, data}) => {
              loginResolved(provider, data)
            }}
            onReject={({error}) => {
              loginRejected(error)
            }}
          >
            <button
              type="button"
              className="google-icon-button"
              label="google-icon"
            >
              <p style={{fontSize: '20px'}}>Sign-in with Google</p>
              <FcGoogle className="google-icon" />
            </button>
          </LoginSocialGoogle>
          <div>
            <form className="form-container" onSubmit={formSubmitted}>
              <label htmlFor="login-id">Email Address</label>
              <input id="login-id" type="text" placeholder="sample@gmail.com" />
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="********" />
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
