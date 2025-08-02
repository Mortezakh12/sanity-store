import Container from "./Container";
import HeaderMenue from "./HeaderMenue";
import Logo from "./Logo";

function Header() {
  return (
    <header className=" border-b border-b-gray-400 py-5">
     <Container className="flex items-center justify-between gap-7">
       {/* left bar */}
      <HeaderMenue />
      {/* logo */}
      <Logo/>
      {/* right bar */}
     </Container>
    </header>
  );
}

export default Header;
