import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import categories from "./categories";

export interface ExpenseItem {
  description: string;
  amount: number;
  category: string;
  id: number;
}
let index = 5;
const ExpenseTracker = () => {
  const [expenseList, setExpenseList] = useState<ExpenseItem[]>([
    { id: 0, amount: 10, description: "Milk", category: "Groceries" },
    { id: 1, amount: 10, description: "Milk", category: "Groceries" },
    { id: 2, amount: 10, description: "Milk", category: "Utilities" },
    { id: 3, amount: 10, description: "Milk", category: "Entertainment" },
    { id: 4, amount: 10, description: "Milk", category: "Entertainment" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const onDelete = (itemId: number) => {
    console.log("deleting", itemId);
    setExpenseList(expenseList.filter((i) => i.id !== itemId));
  };
  return (
    <>
      <ExpenseForm
        onSubmit={(expenseItem) => {
          setExpenseList([...expenseList, { ...expenseItem, id: index++ }]);
        }}
      ></ExpenseForm>
      <div className="mb-3">
        <select
          onChange={(event) => {
            setSelectedCategory(event.target.value);
          }}
          className="form-control"
        >
          <option value="">All Categories</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <ExpenseTable onDelete={onDelete}>
        {selectedCategory === ""
          ? expenseList
          : expenseList.filter((e) => e.category === selectedCategory)}
      </ExpenseTable>
    </>
  );
};

export default ExpenseTracker;
