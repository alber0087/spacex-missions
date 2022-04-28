
import { useState, useEffect } from "react";
import { Heading, Image } from "@chakra-ui/react";
import { LaunchItem } from "./components/LaunchItem"
import * as API from "./services/launches";
import logo from './assets/logoSpaceX.png';


export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Image m={4} src={logo} width={300} />
      <Heading align="left" as="h1" size="md" m={4}>
        SpaceX Launches
      </Heading>
      <section>
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} {...launch} />
        ))}
      </section>
    </>
  );
}


