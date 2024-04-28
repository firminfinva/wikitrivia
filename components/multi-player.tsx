import styles from "./../styles/multi-player.module.scss";

export default function MultiPlayer() {
  return (
    <div className={styles.mutliplayer}>
      <form action="">
        <div>
          <input type="text" />
          <input type="text" />
        </div>

        <button type="submit">Play</button>
      </form>
    </div>
  );
}
