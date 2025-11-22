const MainContent = () => {
  // return (
  //   <main>
  //     <div className="main">
  //       {/* Title */}
  //       <div className="discover">
  //         <h4>Khám phá</h4>
  //       </div>
  //       {/* Discover Items */}
  //       <div className="discover-items">
  //         <div className="discover-item">
  //           <div className="card discover-card">
  //             <div className="card-banner">
  //               <img src="./assets/images/featured-1.png" alt="" />
  //             </div>
  //             <div className="card-content">
  //               <h3>Tình yêu</h3>
  //               <span>Gợi ý • PlayList</span>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="discover-item">
  //           <div className="card discover-card">
  //             <div className="card-banner">
  //               <img src="./assets/images/featured-2.png" alt="" />
  //             </div>
  //             <div className="card-content">
  //               <h3>Nổi bật</h3>
  //               <span>Gợi ý • PlayList</span>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="discover-item">
  //           <div className="card discover-card">
  //             <div className="card-banner">
  //               <img src="./assets/images/featured-3.png" alt="" />
  //             </div>
  //             <div className="card-content">
  //               <h3>Hip Hop</h3>
  //               <span>Gợi ý • PlayList</span>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       {/* Gợi ý hôm nay */}
  //       <div className="suggestion">
  //         <div className="suggest-header">
  //           <h4>Gợi ý hôm nay</h4>
  //           <span>Xem tất cả</span>
  //         </div>
  //         <div className="suggest-items">
  //           <div className="suggest-item">
  //             <div className="suggest-card">
  //               <div className="card-banner">
  //                 <img src="./assets/images/suggest-1.png" alt="" />
  //               </div>
  //               <div className="card-content">
  //                 <h3>Ngày mai người ta lấy chồng</h3>
  //                 <span>Phan Mạnh Quỳnh</span>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="suggest-item">
  //             <div className="suggest-card">
  //               <div className="card-banner">
  //                 <img src="./assets/images/suggest-2.png" alt="" />
  //               </div>
  //               <div className="card-content">
  //                 <h3>Chạy khỏi thế giới này</h3>
  //                 <span>DaLab x Phương Ly</span>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="suggest-item">
  //             <div className="suggest-card">
  //               <div className="card-banner">
  //                 <img src="./assets/images/suggest-3.png" alt="" />
  //               </div>
  //               <div className="card-content">
  //                 <h3>Yêu đương khó quá thì chạy về khóc với anh</h3>
  //                 <span>Erik</span>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="suggest-item">
  //             <div className="suggest-card">
  //               <div className="card-banner">
  //                 <img src="./assets/images/suggest-4.png" alt="" />
  //               </div>
  //               <div className="card-content">
  //                 <h3>Muốn em là</h3>
  //                 <span>Keyo</span>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       {/* Nghệ sĩ nổi bật */}
  //       <div className="artist">
  //         <div className="artist-header">
  //           <h4>Nghệ sĩ nổi bật</h4>
  //           <span>Xem tất cả</span>
  //         </div>
  //         <div className="artist-items">
  //           <div className="artist-item">
  //             <div className="artist-card">
  //               <div className="card-banner">
  //                 <img src="./assets/images/artist-1.png" alt="" />
  //               </div>
  //               <div className="card-content">
  //                 <h3>Đan Trường</h3>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="artist-item">
  //             <div className="artist-card">
  //               <div className="card-banner">
  //                 <img src="./assets/images/artist-2.png" alt="" />
  //               </div>
  //               <div className="card-content">
  //                 <h3>Sơn Tùng MTP</h3>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="artist-item">
  //             <div className="artist-card">
  //               <div className="card-banner">
  //                 <img src="./assets/images/artist-3.png" alt="" />
  //               </div>
  //               <div className="card-content">
  //                 <h3>AMEE</h3>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="artist-item">
  //             <div className="artist-card">
  //               <div className="card-banner">
  //                 <img src="./assets/images/artist-4.png" alt="" />
  //               </div>
  //               <div className="card-content">
  //                 <h3>Mono</h3>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       {/* Playlist */}
  //       <div className="playlist">
  //         <div className="playlist-header">
  //           <h4>Playlist nổi bật</h4>
  //           <span>Xem tất cả</span>
  //         </div>
  //         <div className="playlist-items">
  //           <div className="playlist-item">
  //             <div className="playlist-card">
  //               <div className="card-banner">
  //                 <img src="./assets/images/playlist-1.png" alt="" />
  //               </div>
  //               <div className="card-content">
  //                 <h3>Top Hits 2023</h3>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="playlist-item">
  //             <div className="playlist-card">
  //               <div className="card-banner">
  //                 <img src="./assets/images/playlist-2.png" alt="" />
  //               </div>
  //               <div className="card-content">
  //                 <h3>US-UK 2023</h3>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="playlist-item">
  //             <div className="playlist-card">
  //               <div className="card-banner">
  //                 <img src="./assets/images/playlist-3.png" alt="" />
  //               </div>
  //               <div className="card-content">
  //                 <h3>Rap Việt</h3>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="playlist-item">
  //             <div className="playlist-card">
  //               <div className="card-banner">
  //                 <img src="./assets/images/playlist-4.png" alt="" />
  //               </div>
  //               <div className="card-content">
  //                 <h3>Acoustic</h3>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </main>
  // );
};

export default MainContent;
