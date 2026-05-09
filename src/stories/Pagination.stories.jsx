import { useState } from 'react';
import { Pagination } from '../components/Pagination';

export default {
  title: 'Layout/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    page: { control: { type: 'number', min: 1 } },
    totalPages: { control: { type: 'number', min: 1 } },
    siblingCount: { control: { type: 'number', min: 0, max: 3 } },
  },
};

export const Playground = { args: { page: 1, totalPages: 10 } };
export const Middle = { args: { page: 7, totalPages: 24 } };
export const Few = { args: { page: 2, totalPages: 4 } };
export const Interactive = {
  render: () => {
    const [page, setPage] = useState(5);
    return <Pagination page={page} totalPages={42} onChange={setPage} />;
  },
};
