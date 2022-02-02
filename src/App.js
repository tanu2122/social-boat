import { useState, useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
const Header = lazy(() => import('./components/Header'));
const Profile = lazy(() => import('./components/Profile'));
const User = lazy(() => import('./components/User'));

function App() {
  const [user, setUser] = useState([])
  const [video, setVideo] = useState([])

  const getUser = async () => {

    try {
        const response = await fetch("https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentGet?uid=1");
    
        if(!response.ok) {
            const error = `An error has occured: ${response.status} - ${response.statusText}`;
            console.log(new Error(error));
        }
        const data = await response.json();  
        const result = Object.values(data);
        result.splice(0, 1)
        setUser(result);   
    }
    catch(err) {
        setUser(err.message)
    }
  }

  const getVideo = async () => {
    try {
        const response = await fetch("https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=10&numResults=12");
    
        if(!response.ok) {
            const error = `An error has occured: ${response.status} - ${response.statusText}`;
            console.log(new Error(error));
        }

        const data = await response.json(); 
        setVideo(data.results)
        
    }
    catch(err) {
        setVideo(err.message)
    }
  }

    useEffect(() => {
      getUser()
      getVideo()
  }, [])

  return (
    <div className="App">
    <Suspense fallback={<div>Loading...</div>}>
      
      <BrowserRouter>
      <Header 
      profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
      logoSrc="/images/logo.png" 
      placeholder="Search..."
      video={video}
      />
      <Routes>
        <Route path="/" element={<Profile user={user} video={video}/>} />
        <Route path="/users" element={<User />} />
      </Routes>
      </BrowserRouter>
    </Suspense>
    </div>
  );
}

export default App;
