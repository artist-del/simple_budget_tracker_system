export interface Debt {
    id: string;
    personName: string;
    amount: number;
    dueDate: string;
    status: 'paid' | 'partial' | 'unpaid';
    borrowedDate: string;
}

export const mockDebts: Debt[] = [
    {
        id: '1',
        personName: 'John Doe',
        amount: 500,
        dueDate: '2024-06-01',
        status: 'unpaid',
        borrowedDate: '2024-04-01',
    },
    {
        id: '2',
        personName: 'Jane Smith',
        amount: 200,
        dueDate: '2024-05-15',
        status: 'paid',
        borrowedDate: '2024-03-15',
    },
    {
        id: '3',
        personName: 'Bob Johnson',
        amount: 300,
        dueDate: '2024-07-01',
        status: 'partial',
        borrowedDate: '2024-05-01',
    },
    {
        id: '4',
        personName: 'Alice Brown',
        amount: 150,
        dueDate: '2024-05-20',
        status: 'unpaid',
        borrowedDate: '2024-04-20',
    },
];