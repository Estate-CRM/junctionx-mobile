import { View } from "react-native";
import { InteractiveMap } from "../../components/map";

export default function App(){
    const locations = [
  {
    latitude: 36.752778,
    longitude: 3.042222,
    title: "Algiers City Center",
  },
  {
    latitude: 36.7538,
    longitude: 3.0588,
    title: "Martyrs' Memorial",
  },
  {
    latitude: 36.7372,
    longitude: 3.0863,
    title: "Jardin d’Essai",
  },
  {
    latitude: 36.6986,
    longitude: 3.1744,
    title: "Bab Ezzouar",
  },
  {
    latitude: 36.7112,
    longitude: 3.1392,
    title: "Houari Boumediene Airport",
  },
];
    return (
        <InteractiveMap containerStyle={{flex:1}} locations={locations}></InteractiveMap>
    );
}