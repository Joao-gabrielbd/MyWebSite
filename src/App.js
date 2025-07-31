
import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form/Form';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import CommentSection from './components/CommentSection';

function App() {

  const [collaborators, setCollaborators] = useState([])

  const collaboratorAdd = (collaborator) => {
    console.log(collaborator);
    setCollaborators([...collaborators, collaborator])
  }

  const commentProjects = (props) => [
    {
      id: 0,
      nameProject: "Arraia"
    },
    {
      id: 1,
      nameProject:"Foca"
    },
    {
      id: 2, 
      nameProject:"Corais"
    },
    {
      id: 3,
      nameProject:"Tartaruga"
    }
  ]

  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Projects/>
      <Form newCollaborator = {collaborator => collaboratorAdd(collaborator)}
            commentProjects={commentProjects().map(p => p.nameProject)} 
        />
      <CommentSection collaborators={collaborators}/>
      
    
      <Footer/>
    </div>
  );
}

export default App;




