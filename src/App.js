import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';

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
      { showEvents && events.map((event) => {
        return (
          <div key={event.id}>
            <h3>{event.title}</h3>
            <button onClick={ () => handleClick(event.id)}>Delete event</button>
          </div>
        )
      })}
      <button onClick={() => toggle()}>Toggle</button>
      {showModal && (<Modal handleClose={handleClose}>
          <h2>Terms and conditions</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus diam urna, vitae ultricies lorem placerat ut. 
            Proin scelerisque augue eget dictum efficitur. Duis ultricies tristique sem tincidunt eleifend. Sed gravida justo in nisl molestie facilisis. 
            In quam sapien, pretium ac placerat ac, scelerisque pulvinar nisi. Vestibulum eget pharetra arcu, eu iaculis massa. Nam pharetra ultrices est, 
            a gravida ligula lacinia sit amet. Quisque at nibh quis tortor commodo elementum. Maecenas commodo, sapien nec facilisis semper, 
            ligula neque tempus erat, id semper arcu tortor id ipsum. Donec vestibulum dictum massa, vel placerat eros sodales eget. Maecenas a 
            diam viverra, porta dolor ac, rhoncus purus.
          </p>
      </Modal>)}
      <br/>
      <button onClick={() => setShowModal(true)}>Read terms and conditions</button>
    </div>
  );
}

export default App;
