import Container from "../Container/Container";
import Avatar from "./Avatar";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="shadow-sm border-b bg-white fixed z-10 w-full">
      <div className="py-4">
        <Container>
          <div className="flex justify-between items-center">
            <Logo/>
            <Search />
            <Avatar />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
