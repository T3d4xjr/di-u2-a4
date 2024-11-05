import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists=people.filter(person =>person.profession ==="químico" );

  const listItems = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );
  const nochemists=people.filter(person =>person.profession !=="químico" );

  const listItems2 = nochemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Científicos</h1>
      <h2>Químico</h2>
      <ul>{listItems}</ul>
      <h2>Todo los demas</h2>
      <ul>{listItems2}</ul>
    </article>
  );
}
