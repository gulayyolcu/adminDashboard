import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className="single">
        <Sidebar/>
        <div className="singleContainer">
            <Navbar/>
            <div className="top">
                <div className="left">
                  <div className="editButton">Edit</div>
                    <h1 className="title">Information</h1>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?cs=srgb&dl=pexels-adrienn-1542085.jpg&fm=jpg" alt="" className="itemImg" />
                        <div className="details">
                            <h1 className="itemTitle">Jane Doe</h1>
                            <div className="detailItem">
                                <span className="itemKey">Email:</span>
                                <span className="itemValue">janedoe@gmail.com</span>
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">Phone:</span>
                                <span className="itemValue">01 456 12 32</span>
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">Address:</span>
                                <span className="itemValue">Elton St. 234 Garden Yd. NewYork</span>
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">Country:</span>
                                <span className="itemValue">USA</span>
                            </div>

                        </div>
                    </div>
                   
                </div>
                <div className="right">
                    <Chart aspect={6/1} title="User Spending (Last 6 Month)"/>
                </div>
            </div>
            <div className="bottom">
                <h1 className="title">Last Transaction</h1>

                <List/>
            </div>
        </div>
    </div>
  )
}

export default Single