import style from "./style.module.css";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-row justify-between items-center mb-10">
      <div className={style.container}>{children}</div>
    </div>
  );
}
