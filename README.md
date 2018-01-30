# Project: MyReads - Shannon Clark

This is a project developed as part of Udacity's [React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019). The aim of this project is to create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.

## Getting Started
To set up and run the project, first you'll need to install node/npm. Afterwards, download the project by cloning the git repository:

```
git clone https://github.com/theshannonclark/reactnd-project-myreads-starter.git myreads
```

Then, change into the project directory with `cd myreads`, and install all project dependencies with `npm install`.

Finally, start the development server with `npm start`, which should open `http://localhost:3000` in your web browser.

## Using the Project

On the home page, you'll see three different bookshelves: currently reading, want to read, and read. You can move books between shelves by selecting the drop down menu, and clicking on a different shelf. The change is automatically synchronised with the back-end API server.

If you click the plus icon in the bottom-right corner, you will be taken to a `/search` page where you can search for more books on the back-end server. Shelf changes on this page are also persisted to the server, and are reflected automatically on the home page.
