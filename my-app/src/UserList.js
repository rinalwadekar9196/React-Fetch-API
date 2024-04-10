import React ,{useState,useEffect} from 'react'


const UserList = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);

return (
        <div className="clearfix">
        <div className="row">
          {user.map(data => (
            <div className="col-md-4 animated fadeIn" >
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.flags.png}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {data.name.common +
                      " " +
                      data.name.official}
                  </h5>
                  <div>
                    {data.capital
                    }
                  </div>
               <div>{data.timezones}</div>
                </div>
                <div>{data.continents}</div>
              </div>
            </div>
          ))}
        </div>
    
      </div>
    )
}
export default UserList

