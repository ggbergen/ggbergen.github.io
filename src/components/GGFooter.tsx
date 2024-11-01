import MainFooter from './MainFooter';
import MobileFooter from './MobileFooter';

export default function GGFooter() {
  return (
    <>
      <MainFooter className="hidden md:block"></MainFooter>
      <MobileFooter className="md:hidden"></MobileFooter>
    </>
  );
}
