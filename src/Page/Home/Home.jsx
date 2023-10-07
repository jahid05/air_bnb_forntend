import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import Loader from "../../components/Shared/Loader";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  console.log(category);
  useEffect(() => {
    setLoading(false);
    fetch("roomData.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter((room) => room.category === category);
          setRooms(filtered);
        } else {
          setRooms(data);
        }
      });
  }, [category]);

  return (
    <Container>
      {loading && <Loader />}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-8 py-6">
          {rooms.map((room) => (
            <div className="p-2 group" key={room.id}>
              <figure className="aspect-square w-full relative overflow-hidden rounded-xl">
                <img
                  className="h-full w-full group-hover:scale-110 transition-all duration-500 rounded-2xl object-cover"
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
