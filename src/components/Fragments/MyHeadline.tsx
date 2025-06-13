interface MyHeadLineProps {
  id: string;
}

const me = ["Taupin", "Fabien"] as const;

function MyHeadline({ id }: MyHeadLineProps) {
  return (
    <div
      id={`MyHeadline__container__${id}`}
      className="w-full xs:flex xs:items-center h-fit transition duration-500 delay-100 flex flex-col items-center sm:items-start"
    >
      <h1
        id={`MyHeadline__texts__${id}`}
        className="font-Merich w-fit z-20 text-yellow-100"
      >
        {me.map((txt, k) => (
          <div
            id={`MyHeadline__text__${txt}__${id}`}
            key={k}
            className="text-7xl z-20 xs:text-8xl lg:text-9xl"
          >
            {txt}
          </div>
        ))}
      </h1>
    </div>
  );
}

export default MyHeadline;
