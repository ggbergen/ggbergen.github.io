export default function GGHero() {
  return (
    <div className="-mt-8 h-dvh">
      <div className="absolute top-0 left-0 flex h-dvh w-dvw items-center justify-center overflow-clip bg-black">
        <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          disablePictureInPicture
          className="absolute max-h-fit min-h-full min-w-full object-cover"
        ></video>
        <div className="z-10 flex w-full flex-col justify-center gap-4 text-center">
          <div className="flex justify-center">
            <img
              src="logo.png"
              className="h-auto max-h-40 max-w-full flex-grow-0 p-4 md:max-h-64"
            ></img>
          </div>
          <h1 className="w-full bg-red-500/40 py-6 text-3xl font-bold md:text-5xl">
            Åpent spillhus for
            <br />
            ungdom og unge voksne
          </h1>
        </div>
      </div>
    </div>
  );
}
