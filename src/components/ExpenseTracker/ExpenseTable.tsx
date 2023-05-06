import { ExpenseItem } from "./ExpenseTracker";

interface Props {
  children: ExpenseItem[];
  onDelete: (item: number) => void;
}
const ExpenseTable = ({ children, onDelete }: Props) => {
  if (children.length == 0) return null;

  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {children.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.description}</th>
                <td>{item.amount}</td>
                <td>{item.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>
                $
                {children
                  .reduce((acc, item) => item.amount + acc, 0)
                  .toFixed(2)}
              </td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default ExpenseTable;
