const Footer = () => {
  return (
    <>
      <nav className="nav">
        <div>Profile</div>
        <div>Messages</div>
        <div>News</div>
        <div>Music</div>
        <div>Setings</div>
      </nav>
      <div className="content">
        Main content
        <div>
          <img
            src="https://i.pinimg.com/originals/b7/8b/80/b78b8002f46d41644079811854dfbf25.jpg"
            width="800px"
            alt=""
          />
          <div> ava+descr</div>
          <p></p>
          <div>
            My posts
            <div>New post</div>
            <div>
                <div>new post1</div>
                <div>new post2</div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
