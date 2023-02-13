import { memo, FC } from "react";
import styles from "@/pages/rootLevelPages/tab/components/Cell.module.less";
type Props = {
  name: string;
  icon: string;
  tag?: string | null;
  onPress: (name: string) => void;
};
export const Cell: FC<Props> = memo(({ name, icon, tag, onPress }) => {
  return (
    <div
      className={tag ? styles.CellHot : styles.Cell}
      onClick={() => onPress(name)}
    >
      <div className={tag ? styles.TextHot : styles.Text}>
        {tag}&nbsp;{name}
      </div>
      <div>
        <img className={styles.Img} src={icon}></img>
      </div>
    </div>
  );
});
