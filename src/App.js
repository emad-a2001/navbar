import "./App.css";
export default function App() {
  return (
    <div>
      <div className="nav-background">
        <div className="nav-countainer">
          <header className="nav-header">
            <h1>
              <a href="#" className="nav-logo">
                Sabz Learn
              </a>
            </h1>
          </header>
          <nav>
            <ul className="nav-ul">
              <li>
                <a className="nav-link active-link" href="#">
                  home
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  newz
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  contact
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  about
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
