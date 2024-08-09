# Parking-Lot-Management-System

Overview:

A web application for efficiently managing parking spots, using a React front-end, Spring Boot back-end, and MySQL database.

User Experience:

Landing Page: Users see a straightforward main page.
Admin Features:
View All Parking Spots: Admins can view a list of all parking spots.
Fetch Specific Spot Details: Admins can search for details of specific parking spots.
General Features:
Add New Parking Spot: Users can add new spots via a simple form.
Delete Parking Spot: Users can remove spots by entering a Spot ID.
How It Works:

Navigation: Users select actions from the menu.
Form Submission: Users enter and submit details to perform actions.
Results: The app updates to show changes and confirm actions.

### Front-End (React)

**Overview:**
- **Technology:** React
- **Features:**
  - **Landing Page:** Main interface with navigation.
  - **Add Parking Spot Form:** Input for new parking spot details.
  - **Delete Parking Spot Form:** Remove parking spots by Spot ID.
  - **Admin Dashboard:** Admin-only features to view all spots and fetch details by Spot ID.

**Details:**
- **State Management:** Handles dynamic UI updates.
- **Routing:** Manages navigation between components.
- **API Calls:** Communicates with the back-end for data operations.

### Back-End (Spring Boot)

**Overview:**
- **Technology:** Spring Boot
- **Features:**
  - **Controller:** Manages HTTP requests.
  - **Service:** Contains business logic.
  - **Repository:** Handles database interactions with MySQL.
  - **Model:** Defines parking spot data structure.
  - **Configuration:** Sets up database and application settings.

**Details:**
- **Database:** MySQL for data storage.
- **REST API:** Provides endpoints for front-end operations.
- **Error Handling:** Manages and reports errors.
