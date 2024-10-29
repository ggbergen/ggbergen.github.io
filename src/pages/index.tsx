import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="h-dvh overflow-clip">
        <div className="absolute left-0 top-0 flex h-dvh w-dvw items-center justify-center overflow-clip">
          <video
            src="/hero.mp4"
            autoPlay
            muted
            loop
            className="opac absolute max-h-fit min-h-full min-w-full object-cover blur-lg"
          ></video>
          <div className="z-10 flex flex-col justify-center gap-4 text-center">
            <div className="flex justify-center">
              <img
                src="logo.png"
                className="h-auto max-h-64 max-w-full flex-grow-0"
              ></img>
            </div>
            <h1 className="text-5xl font-bold">
              Åpent spillhus for
              <br />
              ungdom og unge voksne
            </h1>
          </div>
        </div>
      </div>
      <p>
        GGBergen er en frivillig organisasjon som arrangerer ukentlige
        arrangementer i Ungdommens Hus på Laksevåg. Arrangementene våre er for
        personer 13 år og eldre, de er GRATIS og kontroller og konsoller er satt
        opp på stedet, så du trenger ikke ta med noe annet enn deg selv.
      </p>
      <p>
        Vi har åpent hus på de gitte arrangementene, som er hver fredag fra
        16:00-22:00 og hver partalls uke lørdager fra 15:00-22:00.
      </p>
      <p>Sjekk ut eventer for mer informasjon.</p>

      <p>
        Bacon ipsum dolor amet porchetta biltong cow ham hock pork chop pancetta
        rump pork tongue cupim. Kevin sirloin short loin tri-tip pork loin,
        hamburger spare ribs tenderloin t-bone flank boudin. Tenderloin ham
        bresaola strip steak ball tip ribeye corned beef kevin turkey capicola.
        Rump kevin ground round, fatback swine tenderloin meatball brisket
        tongue chicken. Chicken sausage pig filet mignon.
      </p>

      <p>
        Bacon ground round boudin beef ribs tri-tip tail. Turkey t-bone chislic,
        pig bacon venison pork capicola jowl spare ribs. Tri-tip turkey
        meatball, prosciutto beef pork chop flank fatback. Chuck meatball
        sirloin, boudin beef ham hock tail shoulder tenderloin biltong picanha
        ham leberkas beef ribs.
      </p>

      <p>
        Cow pork chop jowl t-bone, shank bacon short ribs flank cupim pig
        andouille tenderloin rump ball tip. Meatball capicola porchetta doner,
        tenderloin alcatra tri-tip. Turducken sausage drumstick ham, venison
        boudin buffalo tenderloin pork loin porchetta pancetta. Pork loin
        meatloaf ribeye ball tip, sausage porchetta pancetta corned beef
        hamburger. Cow pork loin salami buffalo ham bresaola. Shankle tri-tip
        jerky swine t-bone ham hock pork loin tenderloin burgdoggen pork chop
        leberkas. Ribeye kielbasa sirloin andouille ball tip pork.
      </p>

      <p>
        Pancetta prosciutto andouille, tail meatball chuck bresaola beef ribs
        bacon ground round biltong tongue. Pork loin ground round cupim
        burgdoggen ham hock sirloin shankle chuck rump frankfurter prosciutto
        meatloaf kevin pork chop. Spare ribs sirloin pig, rump andouille
        bresaola tail chicken alcatra short ribs drumstick ball tip fatback.
        Beef ribs tail swine cupim kielbasa chislic.
      </p>

      <p>
        Pork belly hamburger shankle, chislic doner burgdoggen shank pork chop
        drumstick pancetta cupim ham beef brisket. Chuck beef ribs rump chislic
        short ribs t-bone meatball pancetta meatloaf. Biltong chuck shank doner
        pastrami, drumstick short ribs strip steak leberkas ball tip pork.
        Pancetta ham hock frankfurter capicola.
      </p>
      <p>
        Does your lorem ipsum text long for something a little meatier? Give our
        generator a try… it’s tasty!
      </p>
      <Link href="/events">Klikk Her</Link>
    </>
  );
}
