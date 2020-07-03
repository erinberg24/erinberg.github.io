export default function Navbar(){
    return `
      <div>
        <nav>
          <ul>
            <li class="navButton" style="padding: 8px">
                <a href="#about">About</a>
            </li>
            <li class="navButton" style="padding: 8px">
                <a href="#news">News</a>
            </li>
            <li class="navButton" style="padding: 8px">
                <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    `;
  }

export function NavbarProject(){
    return `
      <nav>
        <ul>
            <li class="navButton">
                <a href="index.html">Go Back</a>
            </li>
        </ul>
      </nav>
    `;
  }