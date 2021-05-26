const Columns = () => [
  {
    title: 'Name',
    field: 'name',
  },
  {
    title: 'Phone Number',
    field: 'phoneNumber',
  },
  {
    title: 'Email',
    field: 'email',
  },
  {
    title: 'Address',
    render: (row) => (
      <div>
        <p>{row[0]}</p>
      </div>
    ),
  },
  {
    title: 'Logitude',
    field: 'longitude',
  },
  {
    title: 'Latitude',
    field: 'latitude',
  },
]

export default Columns
