export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <div
      className="
        flex
        justify-center
        items-center
        gap-2
        p-4
      "
    >
      <button
        disabled={currentPage === 1}
        onClick={() =>
          onPageChange(currentPage - 1)
        }
        className="
          px-4
          py-2
          rounded-lg
          border
          bg-white
          hover:bg-slate-100
          disabled:opacity-50
        "
      >
        Prev
      </button>

      {Array.from(
        { length: totalPages },
        (_, index) => (
          <button
            key={index}
            onClick={() =>
              onPageChange(index + 1)
            }
            className={`
              h-10
              w-10
              rounded-lg
              transition
              ${
                currentPage === index + 1
                  ? "bg-slate-900 text-white"
                  : "bg-white border"
              }
            `}
          >
            {index + 1}
          </button>
        )
      )}

      <button
        disabled={
          currentPage === totalPages
        }
        onClick={() =>
          onPageChange(currentPage + 1)
        }
        className="
          px-4
          py-2
          rounded-lg
          border
          bg-white
          hover:bg-slate-100
          disabled:opacity-50
        "
      >
        Next
      </button>
    </div>
  );
}