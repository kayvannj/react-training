import { useForm } from "react-hook-form";
import { z } from "Zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "./categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters." }),
  amount: z.number({ invalid_type_error: "Amount is required." }),
  category: z.enum(categories),
});

type ExpenseItem = z.infer<typeof schema>;

interface Props {
  onSubmit: (expenmseItem: ExpenseItem) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ExpenseItem>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description">Description</label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger"> {errors.description.message} </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount">Amount</label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger"> {errors.amount.message} </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category">Category</label>
        <select
          {...register("category")}
          id="category"
          className="form-control"
        >
          <option></option>
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger"> {errors.category.message} </p>
        )}
      </div>
      <div className="mb-3">
        <button className="btn btn-primary pt-6" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
