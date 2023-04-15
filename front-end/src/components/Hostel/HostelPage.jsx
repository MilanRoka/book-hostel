import React from 'react';
import Navbar from '../Navbar/Navbar';
import SimpleImageSlider from "react-simple-image-slider";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';





const images = [
  { url: "public/card1.jpg" },
  { url: "public/card2.jpg" },
  { url: "public/card3.jpg" },
  { url: "public/card4.jpg" },
];

const HostelPage = () => {
  const [detail, setDetail] = React.useState("")
  const {id} = useParams()
  const fetchData = () =>{
    axios.get(`http://localhost:3000/property/${id}`)
    .then(res => {
      setDetail(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row md:pl-24 py-10 ">
        <div className="flex w-1/2 md:w-1/2   ">
          {/* <SimpleImageSlider
            width={896}
            height={504}
            images={detail && detail?.image}
            showBullets={true}
            showNavs={true}
          /> */}
          <img src={detail && detail?.image} alt="" />
        </div>
        <div className="flex md:w-1/2 w-full py-10 ">
          <div className="w-full flex flex-col md:px-20 ">
            <div className=" w-full md:px-20">
              <h1 style={{ fontSize: 30, fontWeight: "bolder", }}>
                {detail && detail?.propertyName}
              </h1>
              <li style={{ fontWeight: 'bold' }}>
                {
                  detail && detail?.address1 + ', ' + detail?.city  + ', ' + detail?.state 
                }
              </li>
              <h3 >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam ni
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eaque ut architecto. A cumque nulla expedita vero praesentium, atque necessitatibus esse aperiam doloribus ipsum aliquam reprehenderit at quibusdam consequatur fugiat.
              </h3>
            </div>
            <div className=" w-full  px-4 pt-10 md:px-20">
              <h1 style={{ fontSize: 20, fontWeight: "bolder", }}>
                Package Offer
              </h1>
              <li>
                Get 10% discount on booking for 1 month or more.
              </li>
              <li >
                Free breakfast included with every booking.
              </li>
              <li >
                Complimentary pick-up and drop-off.
              </li>
            </div>
            <button
              onClick={
                () => {
                  navigate('/checkout')
                }
              } className="block w-customBtn bg-green-900 text-white font-bold py-2 px-4 mx-20 mt-10 rounded-lg hover:bg-green-700">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostelPage;
