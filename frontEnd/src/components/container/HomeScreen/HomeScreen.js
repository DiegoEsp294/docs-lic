  
import React, { useEffect } from 'react';
import Home from '../../presentational/Home/Home'
import './HomeScreen.css'
import { useHistory } from 'react-router-dom';
export default function HomeScreen() {

  let history = useHistory();

  const handleCreate = () => {
    console.log('create')
    history.push('/create');
  }

  const handleUpdate = () => {
    console.log('update')
    history.push('/update');
  }

  const handleViews = () => {
    console.log('views')    
    history.push('/views');
  }

  useEffect(() => {
  }, []);

  return(
    <div style={{
          width: '100%',
          height: '100%'
        }}>
      <Home
        handleCreate={handleCreate}
        handleUpdate={handleUpdate}
        handleViews={handleViews}
      />
    </div>
  )
}