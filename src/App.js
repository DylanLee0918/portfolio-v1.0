import React from 'react';
import GlobalStyle  from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Skill from './pages/SkillPage/Skill'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/skills" exact component={Skill} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
