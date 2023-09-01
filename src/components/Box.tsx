export const Box = (prop: any) => {
  const styles = prop.on ? "bg-black" : "bg-blue-600";

  return (
    <div
      className={`border-2 w-20 h-20 m-1 inline-block ${styles}`}
      onClick={() => prop.changeColor(prop.id)}
    ></div>
  );
};
