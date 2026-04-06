import React, { useState } from "react";
import ActionBTN from "../../buttons/ActionBTN";

export interface TransactionFormData {
  amount: number;
  description: string;
  category: string;
  date: string;
}

interface TransactionFormProps {
  onSubmit: (data: TransactionFormData) => void;
  initialData?: Partial<TransactionFormData>;
  type: "income" | "expense";
}

export const TransactionForm: React.FC<TransactionFormProps> = ({
  onSubmit,
  initialData,
  type,
}) => {
  const [formData, setFormData] = useState<TransactionFormData>({
    amount: 0,
    description: "",
    category: "",
    date: new Date().toISOString().split("T")[0],
    ...initialData,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.amount || formData.amount <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    if (!formData.description.trim()) {
      alert("Description is required");
      return;
    }

    if (!formData.category.trim()) {
      alert("Category is required");
      return;
    }

    onSubmit(formData);
  };

  //only number , no sign or letters
  const blockInvalidChar = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (["e", "E", "-", "+"].includes(e.key)) {
      e.preventDefault();
    }
  };

  const inputStyle =
    "w-full bg-[#1e293b] border border-gray-700 rounded-lg p-1.5 lg:p-2.5 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all";

  const labelStyle = "block text-sm font-medium text-gray-400 mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Amount */}
      <div>
        <label className={labelStyle}>Amount</label>
        <input
          type="number"
          min="0"
          placeholder="0.00"
          value={formData.amount}
          onKeyDown={blockInvalidChar}
          className={inputStyle}
          onChange={(e) =>
            setFormData({
              ...formData,
              amount: parseFloat(e.target.value) || 0,
            })
          }
        />
      </div>

      <div>
        <label className={labelStyle}>Description</label>
        <input
          type="text"
          placeholder="Enter description"
          value={formData.description}
          className={inputStyle}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelStyle}>Category</label>
          <input
            type="text"
            placeholder="Enter Category"
            value={formData.category}
            className={inputStyle}
            onChange={(e) =>
              setFormData({
                ...formData,
                category: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label className={labelStyle}>Date</label>
          <input
            type="date"
            value={formData.date}
            className={inputStyle}
            onChange={(e) =>
              setFormData({
                ...formData,
                date: e.target.value,
              })
            }
          />
        </div>
      </div>

      {/* Submit Button */}
      <ActionBTN size="sm" variant="brand" type="submit">
        {type === "income" ? "Add Income" : "Add Expense"}
      </ActionBTN>
    </form>
  );
};
