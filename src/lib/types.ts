export type navLinksTypes = {
  id: number;
  title: string;
  link: string;
};

type dataArray = {
  data: {
    id: string;
    ItemId: string;
    Quantity: number;
    UserId: string;
    price: number;
  }[];
};
export type cartItemsTypes = {
  id: string;
  ItemId: string;
  Quantity: number;
  UserId: string;
  price: number;
};
