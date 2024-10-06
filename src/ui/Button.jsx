// eslint-disable-next-line react/prop-types
export default function Button({ children, style }) {
    return (
      <>
        <button
          type="button"
          className="rounded px-2 py-1 text-xs font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" style={style}
        >
          {children}
        </button>
      </>
    )
  }
  