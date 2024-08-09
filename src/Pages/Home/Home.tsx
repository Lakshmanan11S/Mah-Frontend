import Layout from "../../Components/Layout/Layout";
import "../../assets/App.scss";


const Home = () => {
  return (
    <Layout>
      <div className="Home container">
        <div className="row home-heading">
          <div className="top-heading">New Tractors</div>
        </div>
        <div className="row home-content">
          <div className="branch col-md-3 ">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                RAJAPALAYAM
                </p>
                <span>Stock:25</span>
              </div>
            </div>
          </div>
          <div className="branch col-md-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                ARUPPUKOTTAI
                </p>
                <span>Stock:25</span>
              </div>
            </div>
          </div>
          <div className="branch col-md-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                KOVILPATTI
                </p>
                <span>Stock:25</span>
              </div>
            </div>
          </div>
          <div className="branch col-md-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                VILATHIKULAM
                </p>
                <span>Stock:25</span>
              </div>
            </div>
          </div>
        </div>
        <hr style={{marginTop:"80px"}}/>
        <div className="row home-heading">
          <div className="top-heading">Old Tractors</div>
        </div>
        <div className="row home-content">
          <div className="branch col-md-3 ">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                RAJAPALAYAM
                </p>
                <span>Stock:25</span>
              </div>
            </div>
          </div>
          <div className="branch col-md-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                ARUPPUKOTTAI
                </p>
                <span>Stock:25</span>
              </div>
            </div>
          </div>
          <div className="branch col-md-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                KOVILPATTI
                </p>
                <span>Stock:25</span>
              </div>
            </div>
          </div>
          <div className="branch col-md-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                VILATHIKULAM
                </p>
                <span>Stock:25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
