# TypeScript First Steps

This project is a simple introduction to TypeScript, demonstrating basic object-oriented programming concepts through a `Car` class and a main script.

## Features

- Definition of a `Car` class with properties and methods (start, stop, accelerate, brake, status)
- Example usage in `main.ts` to create and manipulate car objects
- Console output to observe car status and actions

## Dependencies

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [TypeScript](https://www.typescriptlang.org/) (install via npm)

## Getting Started

1. **Install Node.js**
	- Download and install Node.js from [nodejs.org](https://nodejs.org/).

2. **Install TypeScript**
	- Open a terminal in the project directory and run:
	  ```powershell
	  npm install -g typescript
	  ```

3. **Initialize npm (if not already done)**
	- In the project directory, run:
	  ```powershell
	  npm init -y
	  ```

4. **Compile TypeScript files**
	- Run the following command to compile `main.ts` and `Car.ts`:
	  ```powershell
	  tsc main.ts Car.ts
	  ```
	- This will generate corresponding `.js` files.

5. **Run the code**
	- Execute the compiled JavaScript file:
	  ```powershell
	  node main.js
	  ```

## Project Structure

- `Car.ts` — TypeScript class representing a car
- `main.ts` — Main script demonstrating usage of the `Car` class
- `README.md` — Project documentation
- `LICENSE` — MIT License

## License

This project is licensed under the MIT License.
