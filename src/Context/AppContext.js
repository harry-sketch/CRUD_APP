import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [toasts, setToasts] = useState([]);

  const sortedEmployees = employees.sort((a, b) => (a.name < b.name ? -1 : 1));

  //Funs
  const addEmployee = (name, email, country, phone) => {
    setEmployees([
      ...employees,
      { id: Math.floor(Math.random() * 10), name, email, country, phone },
    ]);
  };

  const deleteEmployee = (id) => {
    setEmployees(sortedEmployees.filter((e) => e.id !== id));
  };

  const editEmployee = (id, editOneEmployee) => {
    setEmployees(
      sortedEmployees.map((sortedEmployee) =>
        sortedEmployee.id === id ? editOneEmployee : sortedEmployee
      )
    );
  };
  const deleteToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  const addToast = (type, text) => {
    setToasts([...toasts, { id: Math.floor(Math.random() * 2), type, text }]);

    setTimeout(() => {
      deleteToast();
    }, 3000);
  };

  useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem("employeeList")));
  }, []);

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  return (
    <AppContext.Provider
      value={{
        sortedEmployees,
        addEmployee,
        deleteEmployee,
        editEmployee,
        toasts,
        addToast,
        deleteToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

// Context Hook
export const useAppContext = () => {
  return useContext(AppContext);
};
