import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
    const response = await fetch('http://localhost:3000/users'); 
    return await response.json();
});

export const addEmployee = createAsyncThunk('employees/addEmployee', async (employee) => {
    const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
    });
    return await response.json();
});

export const editEmployee = createAsyncThunk('employees/editEmployee', async (employee) => {
    const response = await fetch(`http://localhost:3000/users/${employee.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
    });
    return await response.json();
});

export const deleteEmployee = createAsyncThunk('employees/deleteEmployee', async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, { 
        method: 'DELETE',
    });
    return id; 
});

const employeeSlice = createSlice({
    name: 'employees',
    initialState: {
        employees: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEmployees.fulfilled, (state, action) => {
                state.loading = false;
                state.employees = action.payload; 
            })
            .addCase(fetchEmployees.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(addEmployee.fulfilled, (state, action) => {
                state.employees.push(action.payload); 
            })

            .addCase(editEmployee.fulfilled, (state, action) => {
                const index = state.employees.findIndex(emp => emp.id === action.payload.id);
                if (index !== -1) {
                    state.employees[index] = action.payload;
                }
            })

            .addCase(deleteEmployee.fulfilled, (state, action) => {
                state.employees = state.employees.filter(emp => emp.id !== action.payload); 
            });
    },
});

export const { } = employeeSlice.actions;

export default employeeSlice.reducer;
