import Topbar from "./Topbar";
import Midbar from "./Midbar";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <header>
      <Topbar />
      <Searchbar />
      <Midbar />
    </header>
  );
}
