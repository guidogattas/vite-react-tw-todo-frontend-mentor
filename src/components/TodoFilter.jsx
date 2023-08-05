const TodoFilter = ({ changeFilter, filter }) => {

  const filters = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Completed", value: "completed" },
  ]

  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-center gap-4 p-4 bg-white rounded-md">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => changeFilter(value)}
            className={`${filter === value
              ? 'text-blue-500 hover:text-gray-400'
              : 'text-gray-400 hover:text-blue-500'
              }`}
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  )
}

export default TodoFilter