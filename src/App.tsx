import { Route, Routes } from "react-router-dom";

import { TravelWishlist } from "@/pages/TravelWishlist";

export default function App() {
  return <Routes><Route path="/" element={<TravelWishlist />} /></Routes>;
}
