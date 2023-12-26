import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import MainContainer from './components/main-container/MainContainer';
import Signup from './components/signup/Signup';
import Welcome from './components/work-area/welcome/Welcome';
import ChatArea from './components/work-area/chat-area/ChatArea';
import CreateGroup from './components/work-area/create-group/CreateGroup';

function App() {

  const conversation = {
    header: {
        name:"test 1",
        lastMessage:"last message 1",
        timeStamp:"today"
    },

    messages : [
        {
            username:"self",
            content: "how are you?",
            timeStamp:"10:00 AM"
        },
        {
            username:"other",
            content: "i am fine",
            timeStamp:"10:05 AM"
        },
        {
            username:"other",
            content: "how about you?",
            timeStamp:"10:10 AM"
        },
        {
            username:"self",
            content: "great!!",
            timeStamp:"10:15 AM"
        },
        {
            username:"self",
            content: "how's work??? tell me about your work and lets talk in very very detail so that i can check wether my msg box is able to wrap its content in multiple line or it just grows in single line",
            timeStamp:"10:20 AM"
        },
        {
            username:"self",
            content: "great!!",
            timeStamp:"10:15 AM"
        }

    ]
};

  return (
    <div className="App">
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <MainContainer /> */}

      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='app' element={<MainContainer />}>
          <Route path='' element={<Welcome />}></Route>
          <Route path='create-group' element={<CreateGroup />}></Route>
          <Route path='chat' element={<ChatArea props={conversation} />}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
