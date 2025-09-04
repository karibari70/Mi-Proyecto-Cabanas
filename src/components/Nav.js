import Link from "next/link";
import { Aclonica } from 'next/font/google';

const aclonica = Aclonica({
  subsets: ['latin'],
  weight: '400', // Aclonica solo tiene un peso disponible
  display: 'swap',
});

export default function Nav() {
    return (
         <nav className={`${aclonica.className} navbar`}>
            
            <img src="Imagenes/logo2.png" alt="logo" class="logo"   />
            <h2>Cabaña Arrayanes</h2>

            <ul className="nav-menu">
                <li className="nav-item">                     
                    <Link href="/" className="nav-link">INICIO</Link>
                </li>
                <li className="nav-item">
                    <Link href="/cabanas" className="nav-link">CABAÑAS</Link>
                </li>
                <li class="nav-item">
                    <Link href="/servicios" className="nav-link">SERVICIOS</Link>
                </li>
                <li className="nav-item">
                    <Link href="/promociones" class="nav-link">PROMOCIONES</Link>
                </li>
                <li class="nav-item">
                    <Link href="/contacto" class="nav-link">CONTACTO</Link>
                </li>
            </ul>
            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    )
}

