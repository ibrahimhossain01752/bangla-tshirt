import { useLoaderData } from "react-router-dom";




const Home = () => {
    const tshirts = useLoaderData(); 
    return (
        <div>
            <h1>Thirt : {tshirts.length}</h1>
           {/* {
            tshirts.map(tshirt => <Tshirt
            key={tshirt.id}
            tshirt = {tshirt}
            ></Tshirt>)
           } */}
        </div>
    );
};

export default Home;