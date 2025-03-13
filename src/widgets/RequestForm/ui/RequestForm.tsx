const RequestForm = () => {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="email" className="block text-sm/6 font-medium">
            Email адрес
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="off"
              className="block w-full rounded-md bg-foreground px-3 py-1.5 text-base placeholder:text-gray-400 focus:outline-none focus:-outline-offset-2 focus:outline-[var(--primary)] sm:text-sm/6"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
