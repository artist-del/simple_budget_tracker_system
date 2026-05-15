export interface Transaction {
    id: string;
    name: string;
    category: string;
    amount: number;
    date: string;
    type: 'income' | 'expense';
}

export const mockTransactions: Transaction[] = [
    {
        id: '1',
        name: 'Salary',
        category: 'Income',
        amount: 5000,
        date: '2024-05-01',
        type: 'income',
    },
    {
        id: '2',
        name: 'Groceries',
        category: 'Food',
        amount: 150,
        date: '2024-05-02',
        type: 'expense',
    },
    {
        id: '3',
        name: 'Freelance Project',
        category: 'Income',
        amount: 1200,
        date: '2024-05-03',
        type: 'income',
    },
    {
        id: '4',
        name: 'Electricity Bill',
        category: 'Utilities',
        amount: 80,
        date: '2024-05-04',
        type: 'expense',
    },
    {
        id: '5',
        name: 'Coffee Shop',
        category: 'Food',
        amount: 25,
        date: '2024-05-05',
        type: 'expense',
    },
    {
        id: '6',
        name: 'Investment Return',
        category: 'Income',
        amount: 300,
        date: '2024-05-06',
        type: 'income',
    },
    {
        id: '7',
        name: 'Gas',
        category: 'Transportation',
        amount: 60,
        date: '2024-05-07',
        type: 'expense',
    },
    {
        id: '8',
        name: 'Rent',
        category: 'Housing',
        amount: 1200,
        date: '2024-05-01',
        type: 'expense',
    },
];