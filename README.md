# E-Commerce Store
This project is an e-commerce store application developed with a .NET/C# backend and a React/TypeScript frontend. 

## Features
- User authentication and authorization
- Product listing and management
- Shopping cart and checkout process
- Order history and tracking
  
## Technology Stack
### Backend
- .NET: The backend is built using .NET, providing a powerful and flexible server-side environment.
- Entity Framework: Used as the ORM (Object-Relational Mapper) to interact with the SQLite database.
- SQLite: A lightweight, file-based database solution.
- ASP.NET Core Identity: Handles user authentication and authorization.
  
### Frontend
- React: A JavaScript library for building user interfaces, utilizing TypeScript for static typing.
- Redux: Manages the client-side state efficiently.
- Material UI: A popular React UI framework that provides pre-designed components for a consistent and modern look.

## Installation
1. Clone the repository:

           git clone git@github.com:andreanichter/ECommerceStore.git
           cd restore
3. Backend setup:
     - Navigate to the backend project directory:
       
           cd API
     - Restore the dotnet dependendencies:

            dotnet restore
     - Apply migrations to setup the database:

             dotnet ef database update
     - Run the backend server:
    
             dotnet run
  4. Frontend setup:
     - Navigate to the frontend project directory:
    
           cd client
     - Install the npm dependencies:
    
           npm install
     - Start the development server:

           npm start

  ## Running the application 
  - Open your browser and navigate to http://localhost:3000 for the frontend.
  - The backend server will be running on http://localhost:5000.



      
