// import React, { Component } from 'react';
// import './App.css';
// import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
// import Main from './components/main';
// import { Link } from 'react-router-dom';

// class App extends Component {
//   render() {
//     return (
//       <div className="demo-big-content">
//     <Layout>
//         <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">PI Electric</Link>} scroll>
//             <Navigation>
//                 <Link to="/services">Services</Link>
//                 <Link to="/resume">Who Are we</Link>
//                 <Link to="/contact">Contact Us</Link>
//                 <Link to="/quotes">Request a quote</Link>

//             </Navigation>
//         </Header>
//         <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Pi Electric</Link>}>
//             <Navigation>
//               <Link to="/Services">Services</Link>
//               <Link to="/resume">Who are we</Link>
//               <Link to="/contact">Contact Us</Link>
//               <Link to="/quotes">Request a quote</Link>
//             </Navigation>
//         </Drawer>
//         <Content>
//             <div className="page-content" />
//             <Main/>
//         </Content>
//     </Layout>
// </div>

//     );
//   }
// }

// export default App;
import React, { Component } from 'react';

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="container">
       
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
