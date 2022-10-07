import "./navbar.css";
function navbar() {
  return (
    <div>
      <ul>
        <li>
          <a href="default.asp">Home</a>
        </li>
        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn">
            Root of equation
          </a>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn">
            Linear Algrebra
          </a>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default navbar;
