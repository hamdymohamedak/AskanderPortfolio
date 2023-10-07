import styles from "./navbar.module.css";
function Navbar() {

  return (
    <nav className={styles.navbar}>
      <ul className={styles.listParent}>
        {Array.from({ length: 5 }, (_, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
