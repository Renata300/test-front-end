![Alt Text](https://billor.us/images/logo.svg)

# Billor Coding Challenge: Support and Monitoring Center Web App

## Objective

Develop a web application that functions as a support and monitoring center. The app should allow you to manage client data and enable real-time chat communication, as well as display the current location of clients who are drivers on a map. Additionally, the app should differentiate between "driver clients" and other types of clients.

## Functional Requirements

1. **Client CRUD Operations:**
   - Implement Create, Read, Update, and Delete (CRUD) operations for clients.
   - Each client should have basic information (name, email, phone, etc.). For driver clients, include additional details such as their current location (latitude/longitude).

2. **Client Segmentation:**
   - Allow differentiation between driver clients and other types of clients.
   - Visually display this distinction in the user interface (e.g., using icons, colors, or filters).

3. **Integrated Chat:**
   - Develop a real-time chat system inspired by tools like Chatwoot.
   - The chat should facilitate communication between support agents and clients.
   - Maintain a conversation history to allow viewing and continuation of past chats.

4. **Location Mapping:**
   - Integrate a map (using APIs like Google Maps or Mapbox) to display the current location of drivers.
   - When selecting a driver client, display their current position on the map.

## Technical Requirements

- **Technologies:**
  - **React** (preferably with **TypeScript**)
  - Use **React Hooks** and, if needed, a state management solution such as Context API or Redux.
  - Integrate with a map API to display location data.
  - Use Docker.

- **Best Practices:**
  - Write clean, modularized code.
  - Use TypeScript properly for type safety.
  - Create reusable and responsive components.
  - Handle loading states and error management appropriately.
  - (Optional, but desirable) Implement unit tests.

- **Data:**
  - You can simulate an API (using mocks) for the client CRUD operations or use a public API if appropriate.
  - For the chat feature, a simple WebSocket implementation (or a library that simulates this behavior) is acceptable.

## Evaluation Criteria

- **Functionality:** Does the app meet the minimum requirements (CRUD, chat, map integration, client segmentation)?
- **Code Organization:** Is the project structure clear, and does the code adhere to best practices?
- **Use of Technologies:** Does the candidate demonstrate proficiency in React, TypeScript, and integrating external APIs (for chat and maps)?
- **UX/UI:** Is the user interface intuitive and responsive?
- **Problem-Solving:** How effectively does the candidate handle asynchronous operations, error management, and state management?

## Submission

- Host your source code on a public repository (GitHub).
- Provide clear instructions on how to run the project.
- (Optional) Include documentation explaining your technical decisions.

Good luck!
