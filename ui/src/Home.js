import { Card } from 'primereact/card';
import DestinationCard from './components/DestinationCard';
// import { useState } from 'react';


// const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(!open);
//   };

function Home(){

  const destinations = [
    {
      name: "Paris",
      country: "France",
      region: "Europe",
      description: "The City of Light, known for its art, cuisine, and iconic landmarks.",
      activities: ["Visit the Eiffel Tower", "Explore the Louvre", "Stroll along the Seine"],
      imageUrl: "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_640.jpg"
    },
    {
      name: "Bali",
      country: "Indonesia",
      region: "Southeast Asia",
      description: "A tropical paradise with beautiful beaches and rich culture.",
      activities: ["Relax on the beaches", "Visit ancient temples", "Try surfing"],
      imageUrl: "https://imageio.forbes.com/specials-images/imageserve/675172642/pura-ulun-danu-bratan-temple-in-Bali-/960x0.jpg?format=jpg"
    }
  ];
  
  return (
    <div className='homePage'>
       <h1>Home</h1>
            <div className="dropdown">
            {/* <button onClick={handleOpen}>Dropdown</button>
            {open ? (
                <ul className="menu">
                <li className="menu-item">
                    <button>Menu 1</button>
                </li>
                <li className="menu-item">
                    <button>Menu 2</button>
                </li>
                </ul>
            ) : null}
            {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
            </div>
          <div className="flex flex-wrap">
          {destinations.map((destination, index) => (
            <DestinationCard 
              key={index}
              destination={destination}
              activities={destination.activities}
            />
          ))}
          </div>
    </div>
  )
}

export default Home;

//import Dropdown from 'react-bootstrap/Dropdown';
// function countrySelector() {
//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Dropdown Button
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Los Angeles</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

// export default BasicExample;
