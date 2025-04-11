export default function Target({ children, ...props }: any) {
  const id = Object.keys(props)[0] || '';
  console.log(props);
  return (
    <div className="relative">
      <h2 id={id.toString()} className="absolute bottom-10 opacity-0">
        .
      </h2>
      <h2>{children}</h2>
    </div>
  );
}
