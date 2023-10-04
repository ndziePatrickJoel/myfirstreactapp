import styles from './EventsList.module.css';

const EventsList = ({events, handleClick}) => {

    return (
        events.map((event) => {
            return (
              <div key={event.id} className={styles.card}>
                <h3>{event.title}</h3>
                <button onClick={ () => handleClick(event.id)}>Delete event</button>
              </div>
            )
          })
    )
}

export default EventsList;