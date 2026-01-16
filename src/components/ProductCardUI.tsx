interface IProps {}

const ProductCard = ({}: IProps) => {
  return (
    <div className="shadow-shadowBottom rounded-2xl px-2 pb-2 flex flex-col gap-y-2 bg-yellow-50 text-center">
      <div>
        <div className="md:min-h-[80px] min-h-[75px] relative">
          <img
            src="https://api.mahersdev.com/images/50_CHOC-MILKSHAKE-3_4-04_Retouch.png"
            alt="Chocolate Milkshake"
            className="md:h-[180px] h-[150px] w-[150px] object-contain object-bottom absolute -translate-1/2 -top-1/4 left-1/2"
          />
        </div>
        <h3 className="font-medium">Chocolate Milkshake</h3>
        <p>
          Milk, Vanilla Ice Cream Chocolate, Emulsifier, Vanilla Flavour,
          VegetablenGums, Colour...
        </p>
      </div>
      <div className="flex justify-between items-center">
        <span className="price text-yellow-600">10$</span>
        <button className="bg-yellow-300 text-[20px] rounded-full w-8 h-8 cursor-pointer">
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
