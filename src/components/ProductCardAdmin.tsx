import type { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import Button from "./ui/Button";
import Image from "./Image";
import { memo } from "react";

interface IProps {
  product: IProduct;
  idx: number;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
  setProductToEditIdx: (value: number) => void;
  openDeleteModal: () => void;
}

const ProductCardAdmin = ({
  product,
  setProductToEdit,
  openEditModal,
  idx,
  setProductToEditIdx,
  openDeleteModal,
}: IProps) => {
  const { title, description, imageURL, price, category } = product;

  /* ----- HANDLERS ----- */
  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
    setProductToEditIdx(idx);
  };

  const onDelete = () => {
		setProductToEdit(product)
    openDeleteModal();
  };

  return (
    <div className="shadow-shadowBottom rounded-2xl px-2 pb-2 flex flex-col gap-y-2 bg-yellow-50 text-center justify-between">
      <div>
        <div className="md:min-h-[80px] min-h-[75px] relative">
          <Image
            imageUrl={imageURL}
            alt={title}
            className="md:h-[180px] h-[150px] sm:w-[220px] w-[190px] sm:scale-none scale-110 object-contain object-bottom absolute -translate-1/2 -top-1/4 left-1/2"
          />
        </div>
        <h3 className="font-medium">{txtSlicer(title, 25)}</h3>
        <p>{txtSlicer(description)}</p>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <span className="price text-yellow-600">{price}$</span>
          <button className="bg-yellow-300 text-[20px] rounded-full w-10 h-10 cursor-pointer">
            <Image
              imageUrl={category.imageURL}
              alt={category.name}
              className="m-auto w-full h-full object-contain object-center"
            />
          </button>
        </div>
        <div className="buttons flex flex-wrap justify-between gap-2 mt-2">
          <Button
            className="bg-blue-600 flex-1"
            width="w-full"
            onClick={onEdit}
          >
            Edit
          </Button>
          <Button
            className="bg-red-600 flex-1"
            width="w-full"
            onClick={onDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCardAdmin);
