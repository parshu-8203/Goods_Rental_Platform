import { Carousal } from "../../Components/Carousel";
import Retail from "../../Components/Furnirent";
import { MainBar } from "../navbar/Navbar";

const UserPage = () => {
    return (
        <div>
        <MainBar/>
            <Carousal/>
            <Retail/>
        </div>
    )
}

export default UserPage;