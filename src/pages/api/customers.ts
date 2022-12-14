import { NextApiRequest, NextApiResponse } from 'next';
import knex from '@database/db';
import Customer from '@interfaces/Customer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const customers = await knex<Partial<Customer>[]>('users')
    .select('*')
    .where('role', 'customer')
    .select('id', 'username', 'email', 'avatar');

  res.status(200).json(customers);
};

export default handler;
