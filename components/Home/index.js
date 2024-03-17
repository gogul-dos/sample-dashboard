import {useState} from 'react'
import {MdDashboard, MdSettings, MdNotifications} from 'react-icons/md'
import {AiOutlineTransaction, AiTwotoneSchedule} from 'react-icons/ai'
import {HiCash} from 'react-icons/hi'
import {withRouter} from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'
import {FaUser, FaTags, FaUsers, FaRegThumbsUp} from 'react-icons/fa'
import Cookies from 'js-cookie'
import Modal from 'react-modal'
import './index.css'

const Home = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const loggedOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
    console.log(history)
    toggleModal()
  }

  return (
    <div className="main-dashboard-container">
      <div className="dashboard-left-container">
        <h1>Board</h1>
        <div style={{fontWeight: 'bold'}} className="dashboard-list">
          <MdDashboard />
          <p>DashBoard</p>
        </div>
        <div className="dashboard-list">
          <AiOutlineTransaction />
          <p>Transactions</p>
        </div>
        <div className="dashboard-list">
          <AiTwotoneSchedule />
          <p>Schedules</p>
        </div>
        <div className="dashboard-list">
          <FaUser />
          <p>Users</p>
        </div>
        <div className="dashboard-list">
          <MdSettings />
          <p>Settings</p>
        </div>
      </div>
      <div className="dashboard-right-container">
        <nav className="navbar-elements">
          <h1>Dashboard</h1>
          <div className="navbar-right-elements">
            <input
              type="search"
              placeholder="Search.."
              className="dashboard-search"
            />
            <MdNotifications className="icon" />
            <button
              type="button"
              style={{borderWidth: '0', backgroundColor: 'transparent'}}
              label="popup-button"
              onClick={toggleModal}
            >
              <CgProfile className="icon" />
            </button>
            <Modal
              className="modal-container"
              isOpen={isOpen}
              onRequestClose={toggleModal}
              contentLabel="Example Modal"
            >
              <p>Are You Sure? Do You Need to Log-Out!</p>
              <button className="yes-button" type="button" onClick={loggedOut}>
                Yes
              </button>
              <button className="no-button" type="button" onClick={toggleModal}>
                No
              </button>
            </Modal>
          </div>
        </nav>

        <div style={{display: 'flex', alignItems: 'center'}}>
          <div className="tabs-1">
            <HiCash className="icon-tabs" />
            <p>Total Revenues</p>
            <p>$2,129,430</p>
          </div>
          <div className="tabs-2">
            <FaTags className="icon-tabs" />
            <p>Total Transactions</p>
            <p>1,520</p>
          </div>
          <div className="tabs-3">
            <FaRegThumbsUp className="icon-tabs" />
            <p>Total Likes</p>
            <p>9,721</p>
          </div>
          <div className="tabs-4">
            <FaUsers className="icon-tabs" />
            <p>Total Users</p>
            <p>892</p>
          </div>
        </div>
        <div>
          <h2>Line Graph </h2>
          <img
            src="https://res.cloudinary.com/djfbwkdh3/image/upload/v1710689025/Screenshot_2024-03-17_205331_fohzli.png"
            alt="line-graph"
          />
        </div>
        <div className="data-chart">
          <div>
            <h1>Top Products</h1>
            <img
              src="https://res.cloudinary.com/djfbwkdh3/image/upload/v1710688662/Top_Products_Card_ahq4z7.png"
              alt="left"
            />
          </div>
          <div>
            <h1>Today Schedules</h1>
            <img
              src="https://res.cloudinary.com/djfbwkdh3/image/upload/v1710688662/Schedules_Card_u53rmt.png"
              alt="right"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Home)
