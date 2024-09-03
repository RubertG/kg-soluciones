import { TableStyles } from "react-data-table-component"

export const customStyles: TableStyles = {
  pagination: {
    style: {
      backgroundColor: 'transparent',
      color: '#b0b0b0',
      borderTop: '1px solid #2b3545'
    },
    pageButtonsStyle: {
      backgroundColor: 'transparent',
      color: '#b0b0b0'
    }
  },
  table: {
    style: {
      backgroundColor: 'transparent',
      maxWidth: '1240px'
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
  headCells: {
    style: {
      backgroundColor: 'transparent',
      color: 'white'
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
  cells: {
    style: {
      backgroundColor: 'transparent',
      color: '#b0b0b0',
      width: 'auto !important'
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