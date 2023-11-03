import { Grid, Pagination } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";

interface IProps {
  count: number;
  page: string;
}

const Paginate = ({ count, page }: IProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = React.useCallback(
    (name: string, value: number) => {
      const param = new URLSearchParams(searchParams.toString());
      param.set(name, value.toString());

      return param.toString();
    },
    [searchParams]
  );

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    router.push(`${pathname}?${createQueryString("page", value || 1)}`);
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Pagination
        count={count}
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#fff",
            background: (theme) => theme.palette.background.paper,
            "&:hover": {
              background: (theme) => theme.palette.background.paper,
            },
          },
          "& .Mui-selected": {
            color: (theme) => theme.palette.common.white,
            backgroundColor: "#FECE01 !important",
            background: "#FECE01 !important",
            "&:hover": {
              backgroundColor: "#FECE01 !important",
              background: "#FECE01 !important",
            },
            "&:focus": {
              backgroundColor: "#FECE01 !important",
              background: "#FECE01 !important",
            },
          },
        }}
        variant="outlined"
        shape="circular"
        size="large"
        page={parseInt(page, 10)}
        onChange={handleChange}
      />
    </Grid>
  );
};

export default Paginate;
