import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Logo from "@/components/Layout/Header/Logo";
import { CryptoData } from "@/app/api/data"; // Adjust import as necessary

interface Crypto {
  name: string;
  price: number;
}

const SellCrypto = () => {
  const [loading, setLoading] = useState(false);
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [formData, setFormData] = useState<{
    name: string;
    price: number;
    amount: string;
  }>({
    name: "",
    price: 0,
    amount: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setCryptos(CryptoData);
    if (CryptoData.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        name: CryptoData[0].name,
        price: CryptoData[0].price,
      }));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    if (name === "amount") {
      setFormData((prevData) => ({ ...prevData, amount: value }));
    }
  };

  const handleDropdownSelect = (crypto: Crypto) => {
    setFormData((prevData) => ({
      ...prevData,
      name: crypto.name,
      price: crypto.price,
    }));
    setIsDropdownOpen(false);
  };

  const totalCost = formData.amount
    ? (formData.price * parseFloat(formData.amount)).toFixed(2)
    : "0.00";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Crypto purchase successful!");
      setFormData((prevData) => ({ ...prevData, amount: "" }));
    } catch (error) {
      toast.error("An error occurred during the purchase.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex justify-center mb-16">
        <Logo />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 relative">
          <div
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="cursor-pointer text-white bg-transparent border border-dark_border border-opacity-60 rounded-md px-3 py-2 text-start"
          >
            {formData.name}
          </div>
          {isDropdownOpen && (
            <div className="absolute z-10 bg-dark border border-dark_border border-opacity-60 mt-1 rounded-md w-full">
              {cryptos.map((crypto) => (
                <div
                  key={crypto.name}
                  onClick={() => handleDropdownSelect(crypto)}
                  className="px-3 bg-dark_grey text-white hover:text-darkmode py-2 hover:bg-primary cursor-pointer"
                >
                  {crypto.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mb-4">
          <input
            id="crypto-price"
            type="text"
            name="price"
            className="text-white bg-transparent border border-dark_border border-opacity-60 rounded-md px-3 py-2 w-full focus:border-primary focus-visible:outline-0"
            value={`$${formData.price.toLocaleString()}`}
            disabled
            required
          />
        </div>
        <div className="mb-4">
          <input
            id="amount"
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            min="0"
            required
            className="text-white bg-transparent border border-dark_border border-opacity-60 rounded-md px-3 py-2 w-full focus:border-primary focus-visible:outline-0"
          />
        </div>
        <div className="flex justify-between mb-4 text-white">
          <p>Total Price: </p>
          <p>${totalCost}</p>
        </div>
        <button className="hover:text-darkmode font-medium text-18 bg-transparent w-full border border-primary rounded-lg py-3 text-primary hover:bg-primary">
          Sell
        </button>
      </form>
    </div>
  );
};

export default SellCrypto;
