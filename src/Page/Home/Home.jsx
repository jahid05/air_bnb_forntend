import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";

const Home = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("roomData.json")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  console.log(rooms);
  return (
    <Container>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {rooms.map((room) => (
            <div className="" key={room.id}>
              <figure className="w-64 h-64 rounded-2xl overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room.image}
                  alt="Room Image"
                />
              </figure>
              <div className="py-4">
                <h3 className="text-lg font-semibold">{room.location}</h3>
                <p className="text-gray-500">{room.category}</p>
                <p className="text-gray-500">{room.dateRange}</p>
                <p className="font-semibold">$ {room.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Home;
