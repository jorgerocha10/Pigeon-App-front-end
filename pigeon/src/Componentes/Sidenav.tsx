import React from 'react'
import pigeonImg from '../assets/logo.svg';
import dashboard from '../assets/dash.svg';
import conversation from '../assets/conversation2.svg';
import contacts from '../assets/contacts2.svg';
import compose from '../assets/compose.svg';
import settings from '../assets/settings.svg';
import integration from '../assets/integration.svg';
import logout from '../assets/logout.svg';

const styleImg : React.CSSProperties = {
  // height: 180,
  // width: 180,
}

const styleIcons : React.CSSProperties = {
  height: 22,
  width: 22,
}

const Sidenav = () => {
  return (
    <nav className='sidenav box bg-3'>
      <img className='mb-2' src={pigeonImg} style={styleImg} alt="logo Pigeon" />
      <ul>
          <li>
              <span>
                <img src={dashboard} alt="" />
              </span>
              <a href="">Dashboard</a>
          </li>
          <li>
              <span>
                <img style={styleIcons} src={conversation} alt="" />
              </span>
              <a href="">Conversations</a>
          </li>
          <li>
              <span>
                <img style={styleIcons} src={contacts} alt="" />
              </span>
              <a href="">Contacts</a>
          </li>
          <li>
              <span>
                <img style={styleIcons} src={compose} alt="" />
              </span>
              <a href="">Compose</a>
          </li>
          <li>
              <span>
                <img src={settings} alt="" />
              </span>
              <a href="">Settings</a>
          </li>
          <li>
              <span>
                <img style={styleIcons} src={integration} alt="" />
              </span>
              <a href="">Integrations</a>
          </li>
          <li>
              <span>
                <img src={logout} alt="" />
              </span>
              <a href="">Logout</a>
          </li>
      </ul>
    </nav>
  )
}

export default Sidenav