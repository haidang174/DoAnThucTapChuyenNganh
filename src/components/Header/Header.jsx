import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        {/* Left Header */}
        <div className="left-header">
          <form className="search" onSubmit={e => e.preventDefault()}>
            <i className="bx bx-search"></i>
            <input type="text" className="form-control" placeholder="Tìm kiếm bài hát ..." />
          </form>
        </div>

        {/* Right Header */}
        <div className="right-header">
          <div className="profile">
            <i className="bx bxs-user"></i>
          </div>

          <div className="username">
            <a href="#!">User Name</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
