import styles from "./Home.module.scss";
import { SiTypescript } from "react-icons/si";

export default function Home() {
	return (
		<div className={styles.Home}>
			<SiTypescript size={200} />
			<br />
			<br />
			<p>Template desenvolvido por Nathan Bahia</p>
		</div>
	);
}
