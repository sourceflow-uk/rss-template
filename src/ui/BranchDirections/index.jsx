import React, { useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import haversine from "haversine-distance";
import BranchLocationCard from "@/ui/BranchLocationCard";
import { getGlobal } from "@/getters/getGlobal";

const libraries = ["maps", "places"];

export default function BranchDirections({ address, branches }) {
  const global = getGlobal();
  const googleMapsApiKey = global["_theme.googleMapsApiKey"];

  if (!googleMapsApiKey) {
    return null;
  }

  useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey,
    libraries,
  });

  const geocoder = new google.maps.Geocoder();
  const [displayBranch, setDisplayBranch] = useState(null);

  const destinations = branches.map((branch) => ({
    id: branch.id,
    lat: parseFloat(branch.latitude),
    lng: parseFloat(branch.longitude),
  }));

  geocoder
    .geocode({
      address: address,
    })
    .then((response) => {
      const loc = response.results[0].geometry.location;
      const searchedLoc = { lat: loc.lat(), lng: loc.lng() };

      const distances = destinations.map((branch) => ({ ...branch, distance: haversine(searchedLoc, branch) }));
      const closest = distances.reduce((prev, curr) => (prev.distance < curr.distance ? prev : curr));
      const closestBranch = branches.find((branch) => branch.id === closest.id);

      setDisplayBranch(closestBranch);
    });

  return (
    <>
      <h4>Your nearest branch</h4>
      {displayBranch && (
        <BranchLocationCard
          address={displayBranch.address}
          phone={displayBranch.phone}
          email={displayBranch.email}
          map_embed_url={displayBranch.map_embed_url}
          opening_hours={displayBranch.opening_times}
        />
      )}
    </>
  );
}
