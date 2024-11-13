import Link from 'next/link';
import { readdirSync } from 'fs';

type SpillProps = {
  spill: {
    path: string;
    name: string;
  }[];
};

export default function Spill({ spill }: SpillProps) {
  return (
    <>
      <p>Spill</p>
      <div className="flex flex-col">
        {spill.map(({ name, path }) => (
          <Link key={name} href={`spill/${path}`}>
            {name}
          </Link>
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const files = readdirSync(`./src/pages/spill`).map((name) =>
    name.substring(0, name.length - 4),
  );

  const modules = await Promise.all(
    files.map(async (file) => ({
      component: (await import(`@/pages/spill/${file}`)).default as GamePage,
      path: file,
    })),
  );

  const spill = modules.map(({ component, path }, index) => {
    return { path, name: component.displayName };
  });

  return {
    props: {
      spill,
    },
  };
};
