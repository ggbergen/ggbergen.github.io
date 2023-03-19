import Link from "next/link";

export default function Home() {
  return (<>
      <p>GGBergen er en frivillig organisasjon som arrangerer ukentlige arrangementer i Ungdommens Hus på Laksevåg. Arrangementene våre er for personer 13 år og eldre, de er GRATIS og kontroller og konsoller er satt opp på stedet, så du trenger ikke ta med noe annet enn deg selv.</p>
      <p>Vi har åpent hus på de gitte arrangementene, som er hver fredag fra 16:00-22:00 og hver partalls uke lørdager fra 15:00-22:00.</p>
      <p>Sjekk ut eventer for mer informasjon.</p>
      <Link href="/events">Klikk Her</Link>
  </>)
}
