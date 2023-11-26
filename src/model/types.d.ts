interface IBook {
  id: number;
  imageURL: string;
  title: string;
  desc: string;
  price: number;
  discount: number;
  status: string;
}

interface IContext {
  cartModal: boolean;
  setCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IUser {
  id: number;
  user: string;
  password: string;
}
