import styled from 'styled-components'
export default const NavbarSection.div`padding: 22px 0;
overflow: hidden;
background: #fff;
position: relative;
border-bottom: 1px solid #000;`
.navbar {
  
}

.navbar .logo {
  width: 40%;
  float: left;
}

.navbar .logo .logo-text {
  font-size: 30px;
  font-weight: bold;
}

.navbar .ul-list {
  width: 60%;
  float: left;
  list-style: none;
}

.navbar .ul-list .list-item {
  display: inline-block;
}

.navbar .ul-list .list-item a {
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
}

.navbar .ul-list .list-item a:hover {
  color: #eb5424;
}
