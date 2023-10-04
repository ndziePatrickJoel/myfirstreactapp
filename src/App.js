import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventsList from './components/EventsList';
import NewEventForm from './components/NewEventForm';

function App() {

  const [showEvents, setShowEvents] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([
    { title: "Mario's birthday", id: 1},
    { title: "bowser's live stream", id: 2},
    { title: "race on moo moo farm", id: 3}
  ]);

  const handleClick = (id) => {
   
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const toggle = () => {
    setShowEvents( (prevShowEvents) => !prevShowEvents);
  }

  return (
    <div className='App'>
      <Title title="Events in you area" subtitle="All the latest events in mario Kingdom"/>
      { showEvents && <EventsList events={events} handleClick={handleClick} isSalesModal={false} /> }
      <button onClick={() => toggle()}>Toggle</button>
      {showModal && (<Modal handleClose={handleClose}>
         <NewEventForm />
      </Modal>)}
      <br/>
      <button onClick={() => setShowModal(true)}>Add new event</button>
    </div>
  );
}

export default App;
