import { useCallback, useState, type FormEvent } from "react";
import { v4 as uuid } from "uuid";
import toast, { Toaster } from "react-hot-toast";
// import ProductCard from "./components/ProductCardUI";
import ProductCardAdmin from "./components/ProductCardAdmin";
import { categories, formInputsList, productList } from "./data";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import type { IProduct, IValidateProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import SelectMenu from "./components/ui/SelectMenu";
import Image from "./components/Image";

function App() {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    addFlavors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  const defaultErrorMsg = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };
  /* ----- STATE ----- */
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObj);
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);
  const [products, setProducts] = useState(productList);
  const [errorsMsg, setErrorsMsg] = useState<IValidateProduct>(defaultErrorMsg);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  /* ----- HANDLERS ----- */
  const openModal = (): void => setIsOpen(true);
  const closeModal = useCallback((): void => setIsOpen(false), []);
  const openEditModal = useCallback((): void => setIsOpenEdit(true), []);
  const closeEditModal = (): void => setIsOpenEdit(false);
  const openDeleteModal = useCallback((): void => setIsOpenDelete(true), []);
  const closeDeleteModal = (): void => setIsOpenDelete(false);

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setProduct((prev) => ({ ...prev, [name]: value }));
      setErrorsMsg((prev) => ({ ...prev, [name]: "" }));
    },
    [],
  );
  const onChangeEditHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });
    setErrorsMsg({
      ...errorsMsg,
      [name]: "",
    });
  };
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = product;

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMsg) {
      setErrorsMsg(errors as IValidateProduct);
      toast.error("Something Is Wrong", {
        position: "top-center",
        style: {
          color: "#cf0000",
        },
      });
      return;
    }

    setProducts((prev) => [
      { ...product, id: uuid(), category: selectedCategory },
      ...prev,
    ]);
    // onCancel()
    setProduct(defaultProductObj);
    setIsOpen(false);
    toast.success("Product has been Added Successfully", {
      position: "top-center",
      style: {
        color: "#00cf00",
      },
    });
  };
  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = productToEdit;

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMsg) {
      setErrorsMsg(errors as IValidateProduct);
      toast.error("Something Is Wrong", {
        position: "top-left",
        style: {
          color: "#cf0000",
        },
      });
      return;
    }

    const updatedProducts = [...products];
    updatedProducts[productToEditIdx] = productToEdit;
    setProducts(updatedProducts);

    setProductToEdit(defaultProductObj);
    closeEditModal();
    toast.success("Product has been Edited Successfully", {
      position: "top-center",
      style: {
        color: "#00cf00",
      },
    });
  };
  const onDeleteHandler = () => {
    console.log(productToEdit.id);
    const filteredProducts = products.filter(
      (product) => product.id !== productToEdit.id,
    );
    closeDeleteModal();
    setProducts(filteredProducts);
    toast.success("Product has been deleted!", {
      position: "top-center",
      style: {
        color: "#cf0000",
      },
    });
  };
  const onCancel = () => {
    setProduct(defaultProductObj);
    setErrorsMsg(defaultErrorMsg);
    closeModal();
  };

  /* ----- RENDER ----- */
  const renderProductsList = products.map((product, idx) => (
    <ProductCardAdmin
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
      idx={idx}
      setProductToEditIdx={setProductToEditIdx}
      openDeleteModal={openDeleteModal}
    />
  ));
  const renderFormList = formInputsList.map((input) => (
    <div key={input.id} className="flex flex-col mb-4">
      <label
        htmlFor={input.id}
        className="mb-px text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input
        type={input.type}
        name={input.name}
        id={input.id}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage msg={errorsMsg[input.name]} />
    </div>
  ));
  /* --- EDIT PRODUCT INPUTS --- */
  const renderEditFormList = formInputsList.map((input) => (
    <div key={input.id} className="flex flex-col mb-4">
      <label
        htmlFor={input.id}
        className="mb-px text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input
        type={input.type}
        name={input.name}
        id={input.id}
        value={productToEdit[input.name]}
        onChange={onChangeEditHandler}
      />
      <ErrorMessage msg={errorsMsg[input.name]} />
    </div>
  ));

  return (
    <main className="container">
      <div className="text-center p-5 mt-5">
        <Button
          className="bg-designColor hover:hoverColor"
          width="w-fit"
          onClick={openModal}
        >
          Add New Product
        </Button>
      </div>
      <div className="grid 3xs:grid-cols-2 xs:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 mt-20 sm:px-5 px-3 gap-y-25 sm:gap-x-5 gap-x-4 rounded-md items-stretch">
        {renderProductsList}
      </div>
      {/* ADD PRODUCT MODAL */}
      <Modal isOpen={isOpen} closeModal={onCancel} title="add a new product">
        <div>
          {product.imageURL && (
            <Image
              imageUrl={product.imageURL}
              alt={product.title}
              className="mx-auto object-contain w-50 h-auto"
            />
          )}
        </div>
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormList}
          <SelectMenu
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
          <div className="flex flex-wrap items-center space-x-3 gap-y-2">
            <Button
              className="bg-designColor hover:bg-hoverColor flex-1"
              width="w-full"
              type="submit"
            >
              submit
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-600 flex-1"
              width="w-full"
              type="button"
              onClick={onCancel}
            >
              cancel
            </Button>
          </div>
        </form>
      </Modal>
      {/* EDIT PRODUCT MODAL */}
      <Modal
        isOpen={isOpenEdit}
        closeModal={closeEditModal}
        title="Edit This Product"
      >
        <div>
          {productToEdit.imageURL && (
            <Image
              imageUrl={productToEdit.imageURL}
              alt={productToEdit.title}
              className="mx-auto object-contain w-50 h-auto"
            />
          )}
        </div>
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {renderEditFormList}
          <SelectMenu
            selected={productToEdit.category}
            setSelected={(value) =>
              setProductToEdit({ ...productToEdit, category: value })
            }
          />
          <div className="flex flex-wrap items-center space-x-3 gap-y-2">
            <Button
              className="bg-designColor hover:bg-hoverColor flex-1"
              width="w-full"
              type="submit"
            >
              submit
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-600 flex-1"
              width="w-full"
              type="button"
              onClick={() => (closeEditModal(), setErrorsMsg(defaultErrorMsg))}
            >
              cancel
            </Button>
          </div>
        </form>
      </Modal>
      {/* Delete PRODUCT MODAL */}
      <Modal
        isOpen={isOpenDelete}
        closeModal={closeDeleteModal}
        title="Are you sure you want to delete this product?"
      >
        <div className="flex flex-wrap items-center space-x-3 gap-y-2">
          <Button
            className="bg-red-600/85 hover:bg-red-700 flex-1"
            width="w-full"
            type="button"
            onClick={onDeleteHandler}
          >
            Yes, <span className="normal-case">remove</span>
          </Button>
          <Button
            className="bg-gray-400 hover:bg-gray-600 flex-1"
            width="w-full"
            type="button"
            onClick={closeDeleteModal}
          >
            cancel
          </Button>
        </div>
      </Modal>

      <Toaster />
    </main>
  );
}

export default App;
