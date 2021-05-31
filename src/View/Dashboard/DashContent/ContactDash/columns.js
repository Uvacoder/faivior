const Columns = () => [
  {
    title: 'Name',
    render: ({ surName, firstName }) => (
      <div>
        <p>
          {surName} {firstName}
        </p>
      </div>
    ),
  },
  {
    title: 'Phone Number',
    field: 'phoneNo',
  },
  {
    title: 'Email',
    field: 'email',
  },
  // {
  //   title: 'Address',
  //   render: (row) => (
  //     <div>
  //       <p>{row[0]}</p>
  //     </div>
  //   ),
  // },
  // {
  //   title: 'Logitude',
  //   field: 'longitude',
  // },
  // {
  //   title: 'Latitude',
  //   field: 'latitude',
  // },
]

export default Columns
