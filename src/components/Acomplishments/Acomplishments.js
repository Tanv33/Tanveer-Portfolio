import React, { useEffect, useState } from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import axios from "axios";

const defaultData = [
  { number: "$100K", text: "Hackathon Prize Won" },
  { number: "4+", text: "Solana Programs on Mainnet" },
  { number: "2.5K+", text: "Users Served" },
];

const Acomplishments = () => {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    (async () => {
      try {
        const { data: userData } = await getFollowers();
        if (userData) {
          setData((current) => [
            ...current,
            { number: `${userData.followers}+`, text: "Github Followers" },
          ]);
        }
      } catch (err) {
        // Rate limited or offline: keep the static tiles.
      }
    })();
  }, []);

  return (
    <Section>
      <SectionTitle>Personal Achievements</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.number}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider />
    </Section>
  );
};

export default Acomplishments;

const getFollowers = () => {
  return axios.get(
    "https://api.github.com/users/tanv33"
    // "https://api.github.com/users/tanv33/followers?per_page=100"
  );
};
