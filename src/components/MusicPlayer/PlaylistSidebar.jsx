// import { useState } from "react";
import "./MusicPlayer.css";

const PlaylistSidebar = ({ isSidebarOpen, activeTab, setActiveTab, lyrics }) => {
  // const [commentInput, setCommentInput] = useState("");

  // const handleSubmitComment = () => {
  //   const text = commentInput.trim();
  //   if (text !== "") {
  //     addComment(text);
  //     setCommentInput("");
  //   }
  // };

  return (
    <div className={`playlist-sidebar ${isSidebarOpen ? "show" : ""}`}>
      <div className="sidebar-header">
        <div className={`buttons btn-lyrics ${activeTab === "lyrics" ? "active" : ""}`} onClick={() => setActiveTab("lyrics")}>
          <button className="btn">Lời Bài Hát</button>
        </div>
        <div className={`buttons btn-playlist ${activeTab === "playlist" ? "active" : ""}`} onClick={() => setActiveTab("comment")}>
          <button className="btn">Danh sách phát</button>
        </div>
      </div>
      <div className="sidebar-content">
        <section className={`section lyrics ${activeTab === "lyrics" ? "" : "hidden"}`} id="lyrics">
          {lyrics}
        </section>
        {/* <section className={`section comment ${activeTab === "comment" ? "" : "hidden"}`} id="comment">
          <div className="comment-list" id="commentList">
            {comments.map((c, idx) => (
              <div className="comment-item" key={idx}>
                <p>
                  <strong>Bạn:</strong> {c}
                </p>
              </div>
            ))}
          </div>
          <div className="comment-input">
            <input type="text" value={commentInput} onChange={e => setCommentInput(e.target.value)} placeholder="Nhập bình luận của bạn..." />
            <button onClick={handleSubmitComment}>Gửi</button>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default PlaylistSidebar;
