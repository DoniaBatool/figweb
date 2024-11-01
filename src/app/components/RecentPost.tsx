import CardRPost from "./CardRPost"


export const RecentPost = () => {
  return (
    <div className="recent-post">
   <div className="container">
    <div className="main">
        <div className="heading">
            <h3>Recent Post</h3>
            <button className="view-all-btn">View all</button>
        </div>
        <div className="card-parent"><CardRPost/>
                                    <CardRPost/>
        </div>
    </div>

   </div>
    </div>
  )
}
