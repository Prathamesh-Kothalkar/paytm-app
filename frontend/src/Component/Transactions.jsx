import axios from "axios";
import { useEffect, useState } from "react";

export const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/v1/transaction", {
                    headers: {
                        authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
                setTransactions(res.data.trx);
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        };

        fetchTransactions(); 
    }, []);

    return (
        <div>
            <TransactionList transactions={transactions} />
        </div>
    );
};

function TransactionList({ transactions }) {
    return (
        <>
        <div className="text-3xl font-bold mt-3 mb-5" >
            Transactions History
        </div>
        <div>
            {transactions.map((transaction, index) => (
                <Transaction key={index} transaction={transaction} />
            )).reverse()}
        </div>
        </>
    );
}

function Transaction({ transaction }) {
    return (
        <div className="border w-full p-3">
            <div className="flex justify-between">
                <div>{transaction.receiverId}</div>
                <div>
                    {transaction.type === "credit" ? (
                        <div className="text-green-500">Credit</div>
                    ) : (
                        <div className="text-red-500">Debit</div>
                    )}
                </div>
                <div className="text-md font-semibold">Rs. {transaction.amount}</div>
                <div>{transaction.timestamp}</div>
            </div>
        </div>
    );
}
