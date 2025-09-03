📘 Project Description

This is a React calculator app that uses useReducer to manage arithmetic operations between two input numbers.

🔑 Key Features:

Two number inputs

The user enters a first number and a second number.

Arithmetic operations

Four buttons perform operations:

➕ Add

➖ Subtract

✖ Multiply

➗ Divide (with divide-by-zero safety)

Result management with useReducer

Instead of useState, the app uses useReducer for result state management.

The reducer handles different action types (ADD, SUB, MULT, DIV) and computes the result.

Clean and reusable logic

A single handler (handleClick) dispatches the correct action type.

Reducer ensures all calculation logic is centralized and easy to extend.

Basic UI styling

Inputs, labels, and buttons are displayed in the center of the screen.

Background is set to teal with white text for contrast.

⚙️ How It Works

User enters two numbers in the input fields.

User clicks one of the operation buttons.

A corresponding action is dispatched to the reducer.

The reducer calculates the result and updates the UI.

Result is shown below the buttons.

📚 Learning Concepts Covered

React hooks: useState, useReducer

Controlled form inputs in React

Action dispatching & reducer functions

Clean separation of UI (buttons, inputs) and logic (reducer)
