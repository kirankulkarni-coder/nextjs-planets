

import Link from "next/link";
import React from "react";

interface Props {
  planetName: string;
  planetId: number;
}

const NavLink = ({ planetId, planetName }: Props) => {
  return <Link style={{marginLeft: '1rem'}} href={`/${planetId}`}>{planetName.toUpperCase()}</Link>;
};

export default NavLink;
