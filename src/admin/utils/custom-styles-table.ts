import { TableStyles } from "react-data-table-component"

export const customStyles: TableStyles = {
  table: {
    style: {
      backgroundColor: 'transparent'
    }
  },
  headRow: {
    style: {
      backgroundColor: 'transparent',
      borderBottomColor: 'transparent',
      color: '#f2f2f2',
      fontSize: '16px'
    }
  },
  rows: {
    style: {
      backgroundColor: 'transparent',
      borderTop: '1px solid #2b3545',
      color: '#b0b0b0',
      fontSize: '14px'
    }
  },
  headCells: {
    style: {
      backgroundColor: 'transparent',
      color: 'white'
    }
  },
  cells: {
    style: {
      backgroundColor: 'transparent',
      color: '#b0b0b0'
    }
  },
  noData: {
    style: {
      backgroundColor: 'transparent',
      color: '#b0b0b0'
    }
  },
  progress: {
    style: {
      backgroundColor: 'transparent',
      color: '#b0b0b0'
    }
  }
}