import Container from "./Container";
import HeaderMenue from "./HeaderMenue";
import Logo from "./Logo";

function Header() {
  return (
    <header className=" border-b border-b-gray-400 py-5">
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        {/* left bar */}
        <HeaderMenue />
        {/* logo */}
        <div className="w-auto md:w-1/3 flex items-center justify-center">
          <Logo>Next Store</Logo>
        </div>
        {/* right bar */}
        <div className="w-auto md:w-1/3 flex items-center justify-between gap-5">right</div>
      </Container>
    </header>
  );
}

export default Header;
