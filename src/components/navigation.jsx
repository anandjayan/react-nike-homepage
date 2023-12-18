function Navigation() {
  return (
    <div>
      <nav>
        <div className="brandlogo">
          <img src="src\assets\pics\brand_logo.png" alt="" />
        </div>
        <ul>
          <li className="navitems">menu</li>
          <li className="navitems">location</li>
          <li className="navitems">about</li>
          <li className="navitems">contact</li>
        </ul>
        <div>
          <button className="button">Login</button>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
