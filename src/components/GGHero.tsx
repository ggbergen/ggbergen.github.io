export default function GGHero() {
  return (
    <div className="-mt-8 h-dvh">
      <div className="absolute left-0 top-0 flex h-dvh w-dvw items-center justify-center overflow-clip bg-black">
        <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          disablePictureInPicture
          className="absolute max-h-fit min-h-full min-w-full object-cover"
        ></video>
        <div className="z-10 flex flex-col justify-center gap-4 text-center w-full">
          <div className="flex justify-center">
            <img
              src="logo.png"
              className="h-auto max-h-64 max-w-full flex-grow-0 p-4"
            ></img>
          </div>
          <h1 className="text-5xl font-bold bg-red-500/40 w-full py-6">
            Åpent spillhus for
            <br />
            ungdom og unge voksne
          </h1>
        </div>
      </div>
    </div>
  );
}
