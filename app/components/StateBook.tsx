function StateBook({ handleStateChange, bookState, initialLoad }: any) {
  const isChecked = (value: string) => bookState == value;

  function handleCheckradioChange(event: any) {
    const { value } = event.target;
    handleStateChange(value);
  }

  return (
    <div className="flex flex-row justify-start items-center gap-x-5 w-full">
      <label className="text-gray-900 flex items-center gap-x-2 justify-center">
        Read
        <input
          className="transition-all duration-500 ease-in-out w-4 h-4"
          type="radio"
          name="bookState"
          value="Read"
          checked={isChecked("Read") || !initialLoad}
          onChange={handleCheckradioChange}
        />
      </label>
      <label className="text-gray-900 flex items-center gap-x-2 justify-center">
        Reading
        <input
          className="transition-all duration-500 ease-in-out w-4 h-4"
          type="radio"
          name="bookState"
          value="Reading"
          checked={isChecked("Reading") || !initialLoad}
          onChange={handleCheckradioChange}
        />
      </label>
      <label className="text-gray-900 flex items-center gap-x-2 justify-center">
        Pending
        <input
          className="transition-all duration-500 ease-in-out w-4 h-4"
          type="radio"
          name="bookState"
          value="Pending"
          checked={isChecked("Pending") || !initialLoad}
          onChange={handleCheckradioChange}
        />
      </label>
    </div>
  );
}

export default StateBook;
