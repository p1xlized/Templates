import { Link } from 'react-router-dom';

export default function Menu() {
  const idQQC = 123;

  return (
    <nav>
      <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/page01">Page01</Link>
          <Link to="/page02">Page02</Link>
          <Link to={`/page03/${idQQC}`}>Page03</Link>
        </div>
      </div>
    </nav>
  );
}
