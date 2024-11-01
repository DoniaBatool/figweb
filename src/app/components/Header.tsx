import Link from "next/link"
interface HeaderProps {
  font: {
    className: string;
  };
}

const Header = ({ font }: HeaderProps) => {
  return (
    <header>
    <nav className={`${font.className} links-parent`}>
        <ul className="links">
            <li className="link"><Link href="#work">Works</Link></li>
            <li className="link"><Link href="#work">Blog</Link></li>
            <li className="link"><Link href="#work">Contact</Link></li>
        </ul>
     </nav>
 </header>
  )
}

export default Header