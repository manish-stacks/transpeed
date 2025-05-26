export default function Heading({
  title,
  description,
  button,
  buttonLabel,
  buttonIcon,
  buttonAction,
  className = "",
}) {
  const Icon = buttonIcon;

  return (
    <div
      className={`flex flex-col gap-1 mb-6 md:flex-row md:items-center md:justify-between bg-white p-4 rounded shadow ${className}`}
    >
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        {description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}
      </div>

      {button && (
        <button
          onClick={buttonAction}
          className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
        >
          {buttonIcon && <Icon className="mr-2 h-4 w-4" />}
          {buttonLabel}
        </button>
      )}
      
    </div>

    
  );
}
