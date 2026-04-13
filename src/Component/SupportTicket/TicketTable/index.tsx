import React from 'react';
import DataTable from 'react-data-table-component';
import { SupportTicketColumns, SupportTicketTableData } from '@/Data/SupportTicket';

const TicketTable = () => {
  return (
    <div className='table-responsive support-table'>
      <DataTable columns={SupportTicketColumns} data={SupportTicketTableData} striped={true} pagination />
    </div>
  );
};
export default TicketTable;
