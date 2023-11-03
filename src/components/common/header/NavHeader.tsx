import { Grid } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const NavHeader = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Posts",
      href: "/posts",
    },
  ];
  const pathname = usePathname();
  return (
    <Grid
      container
      p={2}
      sx={{
        background: (theme) => theme.palette.background.paper,

        color: (theme) => theme.palette.common.white,
        textTransform: "uppercase",
      }}
    >
      {links.map((link) => (
        <Grid
          item
          sx={{ cursor: "pointer", pr: 4, pl: 4, pb: 1 }}
          key={link?.name}
        >
          <Link
            key={link.name}
            href={link.href}
            style={{
              textDecoration: "none",
              color: pathname === link.href ? "#FECE01" : "#fff",
            }}
          >
            {link.name}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default NavHeader;
