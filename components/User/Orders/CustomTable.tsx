import React from 'react'
import { useTable, usePagination } from 'react-table'
import { Table } from 'reactstrap'
import Select from 'react-select'
import Classes from './CustomTable.module.scss'

const SelectOptions = [
  {
    label: '10',
    value: 10
  },
  {
    label: '25',
    value: 25
  },
  {
    label: '50',
    value: 50
  },
  {
    label: '75',
    value: 75
  }
]

const MainTable: React.FC<{ columns: any; data: any }> = ({
  columns,
  data
}) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    // @ts-ignore
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    // @ts-ignore
    canPreviousPage,
    // @ts-ignore
    canNextPage,
    // @ts-ignore
    pageCount,
    // @ts-ignore
    gotoPage,
    // @ts-ignore
    nextPage,
    // @ts-ignore
    previousPage,
    // @ts-ignore
    setPageSize
  } = useTable(
    {
      columns,
      data,
      initialState: {}
    },
    usePagination
  )

  // Render the UI for your table
  return (
    <>
      <Table responsive hover {...getTableProps()} className={Classes.table}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, i) => (
                <th {...column.getHeaderProps()} key={i}>
                  {column.render('Header')}{' '}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any, i: number) => {
            prepareRow(row)
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell: any, index: number) => {
                  return (
                    <td key={index} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </Table>

      <div className={`${Classes.pagination} pagination`}>
        <div>
          <button
            onClick={() => gotoPage(0)}
            type='button'
            disabled={!canPreviousPage}
          >
            {'<<'}
          </button>{' '}
          <button
            onClick={() => previousPage()}
            type='button'
            disabled={!canPreviousPage}
          >
            {'<'}
          </button>{' '}
          <button
            onClick={() => nextPage()}
            type='button'
            disabled={!canNextPage}
          >
            {'>'}
          </button>{' '}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            type='button'
            disabled={!canNextPage}
          >
            {'>>'}
          </button>
        </div>

        <div className={Classes.select}>
          <span>نمایش</span>
          <Select
            onChange={(e) => {
              setPageSize(e!.value)
            }}
            defaultValue={SelectOptions[1]}
            options={SelectOptions}
            className='basic-single'
            classNamePrefix='select'
            isRtl
            placeholder='تعداد ردیف ها'
          />
          <span>ردیف</span>
        </div>
      </div>
    </>
  )
}

interface TableProps {
  data: {
    id: string
    time: string
    send: string
    receive: string
    status: string
  }[]
  columns: {
    Header: string
    accessor: string
  }[]
}

const CutomTable: React.FC<TableProps> = ({ data, columns }) => {
  return <MainTable columns={columns} data={data} />
}

export default CutomTable
