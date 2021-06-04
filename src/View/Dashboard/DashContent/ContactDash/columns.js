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
]

export default Columns
