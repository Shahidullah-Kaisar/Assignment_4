import Swal from "sweetalert2";

export const warning = async (copies: number, quantity: number) => {
  Swal.fire({
    icon: "warning",
    title: "Not enough copies!",
    text:  `Only ${copies} copies are available, but you requested ${quantity}.`,
  });
};
