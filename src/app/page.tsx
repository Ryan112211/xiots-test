import AwardSection from "@/components/awards";
import Booking from "@/components/booking";
import HomeHero from "@/components/common/hero/HomeHero";
import Perks from "@/components/common/perks/Perks";
import Services from "@/components/services";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <HomeHero />
      <Perks />
      <AwardSection />
      <Services />
      <Booking />
    </Box>
  );
}
